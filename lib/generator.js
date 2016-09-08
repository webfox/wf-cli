const inquirer = require('inquirer');

const silverstripe = require('./silverstripe-starter');
const laravel = require('./laravel-starter');
const themer = require('./themer');

module.exports = () => {

    let remote;

    inquirer.prompt(
        [
            {
                type: 'input',
                name: 'remote',
                message: 'Please provide your remote URL',
                validate: function( value ) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please provide your remote URL';
                    }
                }
            }
        ]
    ).then(answers => {
        remote = answers.remote;
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
                        generator = silverstripe(remote);
                        break;
                    case 'Laravel':
                        generator = laravel();
                        break;
                }

            generator
                .then(() => themer(answers.backend))
                .catch(error => console.error(error));
        });    
    });
};
