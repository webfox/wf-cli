const exec = require('child_process').exec;
const git = require('simple-git')();

module.exports = () => {
  return git
    .clone('https://github.com/webfox/silverstripe-bootstrap.git', './themes/default')
    .then(() => exec('rm -rf ./themes/default/.git'));
};
