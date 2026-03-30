import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const url = require('node:url');

const originalParse = url.parse.bind(url);
const originalResolve = url.resolve.bind(url);
const syntheticBase = 'resolve:///';

function stripSyntheticBase(href) {
  return href.startsWith(syntheticBase) ? href.slice(syntheticBase.length - 1) : href;
}

url.parse = function parse(urlString, parseQueryString, slashesDenoteHost) {
  try {
    return new URL(urlString, syntheticBase);
  } catch {
    return originalParse(urlString, parseQueryString, slashesDenoteHost);
  }
};

url.resolve = function resolve(from, to) {
  try {
    const resolved = new URL(to || '', new URL(from || '/', syntheticBase));
    return stripSyntheticBase(resolved.href);
  } catch {
    return originalResolve(from, to);
  }
};
