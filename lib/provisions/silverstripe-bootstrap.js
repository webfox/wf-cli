const exec = require('child_process').exec;

module.exports = (details) => {
  // Check if vhost exists
  exec(`vhost create ${details.host} .`);
  // Check if msw exists
  exec(`msw`, () => {
    // Set db credentials here
  });
  exec('mkdir assets', () => {
    exec('chmod -R 777 assets');
  });
  exec('composer install', () => {
    console.log('Build Database');
    exec('./framework/sake \'/dev/build/\' \'flush=all\'');
  });
  exec('cd themes/default && npm install', () => {
    console.log('Building Theme');
    exec('cd themes/default && npm run build');
  });
};
