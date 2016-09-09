const inquirer = require('inquirer');

const silverstripeBootstrap = require('./provisions/silverstripe-bootstrap');
const silverstripeBulma = require('./provisions/silverstripe-bulma');
const laravelBootstrap = require('./provisions/laravel-bootstrap');
const laravelBulma = require('./provisions/laravel-bulma');

module.exports = (platform, theme) => {
  // Need to add a check in here for platform and theme
  // If platform and theme are not available ask user

  inquirer.prompt([
    {
      name: 'host',
      type: 'input',
      message: 'Please enter a host name:',
      validate: function (value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter a host name:';
        }
      }
    },
    {
      name: 'user',
      type: 'input',
      message: 'Please enter the database user:',
      validate: function (value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter the database user:';
        }
      }
    },
    {
      name: 'pass',
      type: 'input',
      message: 'Please enter the database user password (will be visible):',
      validate: function (value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter the database user password (will be visible):';
        }
      }
    },
    {
      name: 'name',
      type: 'input',
      message: 'Please enter the database name:',
      validate: function (value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter the database name:';
        }
      }
    }
  ]).then(answers => {
    switch (platform) {
      case 'SilverStripe':
        switch (theme) {
          case 'Bootstrap':
            silverstripeBootstrap(answers);
            break;
          case 'Bulma/Vue':
            silverstripeBulma(answers);
            break;
        }
        break;

      case 'Laravel':
        switch (platform) {
          case 'Bootstrap':
            laravelBootstrap(answers);
            break;
          case 'Bulma/Vue':
            laravelBulma(answers);
            break;
        }
        break;
    }
  });
};
