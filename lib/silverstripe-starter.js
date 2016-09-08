const Promise = require('pinkie-promise');
var git = require('simple-git')();

module.exports = generator => {
  console.log('silverstripe generator');
  // git
  //   .init()
  //   .addRemote('origin', 'https://github.com/webfox/silverstripe-starter.git')
  //   .pull('origin', 'master');

  return new Promise((resolve) => resolve());
};