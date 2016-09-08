const inquirer = require('inquirer');

const silverstripe = require('./generators/silverstripe-starter');
const laravel = require('./generators/laravel-starter');
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
  ).then(answers => {
    let generator;
    switch (answers.backend) {
      case 'SilverStripe':
        generator = silverstripe();
        break;
      case 'Laravel':
        generator = laravel();
        break;
    }
    generator
      .then(() => themer(answers.backend))
      .catch(error => console.error(error));
  });
};
