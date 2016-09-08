const provisioner = require('./provisioner');

module.exports = (platform) => {
  console.log(`Set up theme for: ${platform}`);
  provisioner(platform, 'this will be the theme');
};