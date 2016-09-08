const exec = require('child_process').exec;
const git = require('simple-git')();

module.exports = () => {
  return git
    .init()
    .addRemote('origin', 'https://github.com/webfox/silverstripe-starter.git')
    .pull('origin', 'master')
    .then(() => exec('rm -rf ./.git'))
    .init();
};
