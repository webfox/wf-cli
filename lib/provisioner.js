const inquirer = require('inquirer');

const silverstripeBootstrap = require('./provisions/silverstripe-bootstrap');
const silverstripeBulma = require('./provisions/silverstripe-bulma');
const laravelBootstrap = require('./provisions/laravel-bootstrap');
const laravelBulma = require('./provisions/laravel-bulma');

module.exports = (platform, theme) => {
  // Need to add a check in here for platform and theme
  // If platform and theme are not available ask user


  class Provisioner {

    constructor(platform = false, theme = false) {

      this.platform = platform;
      this.theme = theme;

      this.database = {};

      inquirer.prompt([
        this.platformPrompt(platform),
        this.themePrompt(theme),
        this.hostnamePrompt(),
        this.databaseUserPrompt(),
        this.databasePassPrompt(),
        this.databaseNamePrompt()
      ]).then((answers) => {
        this.platform = this.platform || answers.platform;
        this.theme = this.theme || answers.theme;
        this.database = answers;
        this.provision();
      });


    }

    platformPrompt(platform) {
      if(platform) return {};
        return {
        type: 'list',
        name: 'platform',
        message: 'Please provide the backend framework',
        choices: [
          'SilverStripe',
          'Laravel'
        ]
      }
    }

    themePrompt(theme) {
      if(theme) return {};
      return {
        type: 'list',
        name: 'theme',
        message: 'Please provide the frontend framework',
        choices: [
          'Bootstrap',
          'Bulma/Vue'
        ]
      }
    }

    hostnamePrompt() {
      return {
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
      }
    }

    databaseUserPrompt() {
      return {
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
      };
    }

    databasePassPrompt() {
      return {
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
      };
    }

    databaseNamePrompt() {
      return {
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
      };
    }

    provision() {
      switch (this.platform) {
        case 'SilverStripe':
          switch (this.theme) {
            case 'Bootstrap':
              silverstripeBootstrap(this.database);
              break;
            case 'Bulma/Vue':
              silverstripeBulma(this.database);
              break;
          }
          break;

        case 'Laravel':
          switch (this.theme) {
            case 'Bootstrap':
              laravelBootstrap(this.database);
              break;
            case 'Bulma/Vue':
              laravelBulma(this.database);
              break;
          }
          break;
      }
    }
  }
  new Provisioner(platform, theme);
};
