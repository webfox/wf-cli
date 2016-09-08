const Promise = require('pinkie-promise');
var git = require('simple-git')();

module.exports = remote => {
    console.log(remote);
    return 'ss git';
    return git
    .init()
    .addRemote('origin', 'https://github.com/webfox/silverstripe-starter.git')
    .pull('origin', 'master')
    .removeRemote('origin')
    .addRemote('origin', remote);
};
