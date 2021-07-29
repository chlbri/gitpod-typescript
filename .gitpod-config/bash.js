const edit = require('edit-json-file');
const shell = require('shelljs');
const fs = require('fs');

const version = '0.0.1';

const package = edit(`${process.cwd()}/package.json`);

package.set('version', version);

package.set(
  'scripts.prettier',
  'prettier --write App.tsx "**/*.{ts,tsx}"',
);

package.set('scripts.eslint', 'eslint "{src/**/*,App}.{ts,tsx}"');

package.set('scripts.eslint-fix', 'yarn run eslint -- --fix');

const author = `${shell.exec('git config --get user.name', {
  silent: true,
})} <${shell.exec('git config --get user.email', {
  silent: true,
})}>`.replace(/\r?\n|\r/g, '');

package.set('author', author);

const repository = shell
  .exec('git config --get remote.origin.url', {silent: true})
  .replace(/\r?\n|\r/g, '');

package.set('repository', repository);

package.save();

fs.writeFileSync(`${process.cwd()}/README.md`, `# ${repository}`);
