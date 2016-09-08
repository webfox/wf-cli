const Promise = require('pinkie-promise');
var git = require('simple-git')();

module.exports = () => {
  return git
    .init()
    .addRemote('origin', 'https://github.com/webfox/silverstripe-starter.git')
    .pull('origin', 'master');
};