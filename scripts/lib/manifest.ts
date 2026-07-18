import shell from 'shelljs';
import packageInfo from '../../package.json' with { type: 'json' };

export type Manifest = {
  schemaVersion: string;
  packageVersion: string;
  builtAt: string;
  repository: string;
  commit: string;
  ref: string;
};

export function generateManifest(): Manifest {
  // CI builds (PR previews, staging) set GITHUB_SHA and GITHUB_REF automatically.
  // npm releases ship committed dist/ from local `npm run dist`, so fall back to git.
  const commit = process.env.GITHUB_SHA ?? execGit('git rev-parse HEAD');
  const ref = process.env.GITHUB_REF ?? execGit('git rev-parse --abbrev-ref HEAD');

  return {
    schemaVersion: String(packageInfo.version).split('.')[0],
    packageVersion: packageInfo.version,
    builtAt: new Date().toISOString(),
    repository: npmRepositoryUrlToHttpsUrl(packageInfo.repository.url),
    commit,
    ref,
  };
}

/** Convert an npm package.json repository URL to a normal HTTPS web URL. */
function npmRepositoryUrlToHttpsUrl(repositoryUrl: string): string {
  return repositoryUrl.replace(/^git\+/, '').replace(/\.git$/, '');
}

function execGit(command: string): string {
  const result = shell.exec(command, { silent: true });
  if (result.code !== 0) {
    throw new Error(`\`${command}\` failed`);
  }
  return result.stdout.trim();
}
