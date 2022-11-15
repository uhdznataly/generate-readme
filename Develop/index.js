// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
inquirer
    .prompt([

        {
            type: 'input',
            name: 'Title',
            message: 'What is the title of your project?',
        },

        {
            type: 'input',
            name: 'Description',
            message: 'Add a description of your project',
        },

        {
            type: 'input',
            name: 'Installation',
            message: '',
        },

        {
            type: 'input',
            name: 'Usage',
            message: '',
        },

        {
            type: 'input',
            name: 'Test',
            message: '',
        },

        {
            type: 'input',
            name: 'Contribution',
            message: '',
        },

        {
            type: 'input',
            name: 'License',
            message: '',
        },

        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
        },

        {
            type: 'input',
            name: 'linkedin',
            message: 'Enter your LinkedIn URL.',

            type: 'input',
            name: 'linkedin',
            message: 'Enter your LinkedIn URL.',
        },])

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();