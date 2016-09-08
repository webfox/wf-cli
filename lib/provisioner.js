const themer = require('./themer');

module.exports = (platform) => {
  console.log(`Provisioning: ${platform}`);
  themer(platform);
};