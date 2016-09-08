const inquirer = require('inquirer');

const provisioner = require('./provisioner');

module.exports = (platform) => {
  console.log(`Set up theme for: ${platform}`);
  provisioner(platform, 'this will be the theme');

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
    }
  );

};