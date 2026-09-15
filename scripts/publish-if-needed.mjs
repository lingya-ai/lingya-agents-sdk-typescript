/**
 * Makes a tag workflow safe to rerun after npm accepted the package.
 *
 * An existing version is accepted only when npm records the same Git commit as
 * the current workflow. A missing version is published through the workflow's OIDC identity.
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const packageJson = JSON.parse(readFileSync(resolve(import.meta.dirname, '..', 'package.json'), 'utf8'));
const packageSpec = `${packageJson.name}@${packageJson.version}`;
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const registryArgument = '--registry=https://registry.npmjs.org';
const view = spawnSync(npmCommand, ['view', packageSpec, 'gitHead', '--json', registryArgument], {
  encoding: 'utf8',
});

if (view.status === 0) {
  const publishedGitHead = JSON.parse(view.stdout);
  if (publishedGitHead !== process.env.GITHUB_SHA) {
    throw new Error(`${packageSpec} already exists but was not published from ${process.env.GITHUB_SHA}`);
  }
  console.log(`${packageSpec} already exists for this Git commit; skipping duplicate publish.`);
  process.exit(0);
}

if (!/E404|404 Not Found/.test(view.stderr)) {
  process.stderr.write(view.stderr);
  throw new Error(`Unable to determine whether ${packageSpec} already exists`);
}

const publish = spawnSync(npmCommand, ['publish', registryArgument], { stdio: 'inherit' });
if (publish.status !== 0) process.exit(publish.status ?? 1);
