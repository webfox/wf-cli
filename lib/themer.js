const inquirer = require('inquirer');

const provisioner = require('./provisioner');
const silverstripeBootstrap = require('./themes/silverstripe-bootstrap');
const silverstripeBulma = require('./themes/silverstripe-bulma');
const laravelBootstrap = require('./themes/laravel-bootstrap');
const laravelBulma = require('./themes/laravel-bulma');

module.exports = (platform) => {

  console.log(`Set up theme for: ${platform}`);

  inquirer.prompt(
    [
      {
        type: 'list',
        name: 'frontend',
        message: 'Please select a frontend framework',
        choices: [
          'Bootstrap',
          'Bulma/Vue'
        ]
      }
    ]
  ).then(answers => {
    let themer;
    switch (answers.frontend) {
      case 'Bootstrap':
        switch (platform) {
          case 'SilverStripe':
            themer = silverstripeBootstrap();
            break;
          case 'laravel':
            themer = laravelBootstrap();
            break;
        }
        break;

      case 'Bulma/Vue':
        switch (platform) {
          case 'SilverStripe':
            themer = silverstripeBulma();
            break;
          case 'laravel':
            themer = laravelBulma();
            break;
        }
        break;
    }
    themer
      .then(() => provisioner(platform, answers.frontend))
      .catch(error => console.error(error));
  });
};
