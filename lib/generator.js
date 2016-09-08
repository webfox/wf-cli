const inquirer = require('inquirer');

const silverstripe = require('./silverstripe-starter');
const laravel = require('./laravel-starter');
const themer = require('./themer');

module.exports = () => {

  inquirer.prompt(
    [
      {
        type: 'list',
        name: 'backend',
        message: 'Please select a backend framework',
        choices: [
          'SilverStripe',
          'Laravel'
        ]
      }
    ]
  ).then(function (answers) {
      switch (answers.backend) {
        case 'SilverStripe':
          silverstripe();
          themer('SilverStripe');
          break;
        case 'Laravel':
          laravel();
          themer('SilverStripe');
      }
    }
  );

};