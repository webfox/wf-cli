const inquirer = require('inquirer');

const silverstripe = require('./silverstripe-starter');
const laravel = require('./laravel-starter');
const provisioner = require('./provisioner');

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
      .then(() => provisioner(answers.backend))
      .catch(error => console.error(error));
    }
  );

};
