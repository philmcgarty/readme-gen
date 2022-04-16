// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of the project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for use?' // ask about this
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license type:',
        choices: ['GPL','Apache','Ms-PL','BSD','CDDL','EPL','MIT'] // ask about this
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Contributors?' //ask about this
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests?' // ask about this
    },
    {
        type: 'input',
        name: 'githubUser',
        message: 'Enter your GitHub user name'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, err =>{
        if (err){
            console.log(err);
            return;
        }

        console.log('README file created')
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(data => {
        
        return generateMarkdown(data);
    })
    .then(markdownText =>{
        writeToFile('./dist/README.md', markdownText)
    });
    
};

// Function call to initialize app
init();
