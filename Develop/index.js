// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'Title',
    message: 'What is the title of your project?',
    validate: (titleCheck) => {
        if (titleCheck) {
            return true;
        } else {
            console.log("Add title before continuing");
            return false
        }
    }
}
    ,
{
    type: 'input',
    name: 'Description',
    message: 'Add a description of your project',
},
{
    type: 'input',
    name: 'hobby',
    message: 'What is your favorite hobby?',
},
{
    type: 'input',
    name: 'food',
    message: 'What is your favorite food?',
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
},]

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();