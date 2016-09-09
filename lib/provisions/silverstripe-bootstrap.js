require('shelljs/global');

const exec = require('child_process').exec;

module.exports = (details) => {
  const file = './mysite/_config.php';

  // @TODO check for assets.zip and database.sql

  // Check if vhost exists
  exec(`sudo vhost create ${details.host} .`);
  // Check if msw exists
  exec(`msw`, () => {
    exec('chmod 777 error.log');
    sed('-i', `"username" => ''`, `"username" => \'${details.user}\'`, file);
    sed('-i', `"password" => ''`, `"password" => \'${details.pass}\'`, file);
    sed('-i', `"database" => ''`, `"database" => \'${details.name}\'`, file);
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
