// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./Develop/utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
function init(){
inquirer
    .prompt([

        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },

        {
            type: 'input',
            name: 'description',
            message: 'Add a description of your project.',
        },

        {
            type: 'input',
            name: 'installation',
            message: 'Please provide instructions for installation.',
        },

        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information.',
        },

        {
            type: 'input',
            name: 'test',
            message: 'Please describe instructions for the test.',
        },

        {
            type: 'input',
            name: 'contribution',
            message: 'Are you accepting contributions on this project?',
        },

        {
            type: 'checkbox',
            name: 'license',
            message: 'What license is being used? ',
            choices: [
                "Apache 2.0",
                "GNU General v3.0",
                "GNU General v2.0",
                "MIT License",
                "Boost Software 1.0",
                "Eclipse Public 2.0",
                "Creative Commons Zero v1.0",
            ],
        },

        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
        },

        {
            type: 'input',
            name: 'linkedin',
            message: 'Enter your LinkedIn ID aspect.',
        },

        {

            type: 'input',
            name: 'email',
            message: 'Enter your Email Address.',
        },

    ])
    .then(
        ({
            title,
            description,
            installation,
            usage,
            test,
            contribution,
            license,
            github,
            linkedin,
            email,


        }) => {
            const readMe = `${title}'
    
    ![License](https://img.shields.io/badge/LICENSE-${license}-pink)
    
    ## Description
    ${description}
   
    ## Table of Contents

    ## Description
    ${description}
    
    
    ## Installation
    ${installation}

    ## Usage
    ${usage}

    ## Tests
    ${test}

    ## Contribution
    ${contribution}
        
    ## Questions
    Find me on:
    GitHub- https://github.com/${github}
    Linkedin - https://linkedin.com/in/${linkedin}


    ## License
    License brought to you by ${license}.`;
    
    
fs.writeFile("./Develop/utils/README.md", readMe, (err) =>
                    err
                        ? console.log(err)
                        : console.log("See utils file for README")
                );
        }
    )};


// Function call to initialize app
init();