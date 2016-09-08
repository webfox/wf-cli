#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const inquirer = require('inquirer');

const generator = require('./lib/generator');
const provisioner = require('./lib/provisioner');

clear();
console.log(
    chalk.yellow(
        figlet.textSync('Webfox', {horizontalLayout: 'full'})
    )
);

inquirer.prompt(
    [
        {
            type: 'list',
            name: 'actions',
            message: 'What do you want to do?',
            choices: [
                'Generate a Site',
                'Provision a Site',
                'Publish a Site',
                'Update a Site'
            ]
        }
    ]
).then(function (answers) {
    switch (answers.actions) {
        case 'Generate a Site':
            generator();
            break;
        case 'Provision a Site':
            provisioner();
            break;
        default:
            console.log('This feature has not yet been implemented');
    }
});
