import type { IOutputError } from 'better-ajv-errors';

const escapeData = (str: string) => str
  .replace(/%/g, '%25')
  .replace(/\r/g, '%0D')
  .replace(/\n/g, '%0A');

const escapeProperty = (str: unknown) => escapeData(`${str}`)
  .replace(/:/g, '%3A')
  .replace(/,/g, '%2C');

export interface SchemaError {
  error: IOutputError;
  file: string;
}

/**
 * when runnning in the CI environment, also print errors
 * in a machine-readable format, so they can be shown in
 * the PR view
 *
 * spec: https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands#setting-an-error-message
 */
export function printErrorsForCI(errors: SchemaError[]) {
  if (!process.env.CI) return;

  for (const { error, file } of errors) {
    const data: Record<string, unknown> = {
      file: file.replace(/^\.\//, ''),
      line: error.start.line,
      endLine: error.end?.line,
      col: error.start.column,
      endColumn: error.end?.column,
      title: error.suggestion,
    };
    const dataString = Object
      .entries(data)
      .filter(([, value]) => !!value)
      .map(([key, value]) => `${key}=${escapeProperty(value)}`)
      .join(',');

    process.stdout.write(`::error ${dataString}::${escapeData(error.error)}\n`);
  }
}
