#!/usr/bin/env node

const fs          = require('fs');
const chalk       = require('chalk');
const clear       = require('clear');
const figlet      = require('figlet');
const inquirer    = require('inquirer');

const files = require('./lib/files');

clear();
console.log(
  chalk.yellow(
    figlet.textSync('Webfox', { horizontalLayout: 'full' })
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
    ).then(function( answers ) {
console.log(answers);
      }
    );
