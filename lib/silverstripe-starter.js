var git = require('simple-git')();

module.exports = () => {
  git
    .init()
    .addRemote('origin', 'https://github.com/webfox/silverstripe-starter.git')
    .pull('origin', 'master');
  console.log('cloned');
};