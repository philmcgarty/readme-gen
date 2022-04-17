// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project name? (required)',
        validate: titleInput => {
            if (titleInput){
                return true;
            } else {
                console.log('Please enter the project name');
                return false;
            };
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of the project (required)',
        validate: descInput => {
            if (descInput){
                return true;
            } else {
                console.log('Please enter a project description');
                return false;
            };
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions (optional)'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for how to use the software? (optional)'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license type:',
        choices: ['GPL','Apache','Ms-PL','BSD','CDDL','EPL','MIT']
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Give guidelines for contributors to the project (optional)'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test data for the project (optional)'
    },
    {
        type: 'input',
        name: 'githubUser',
        message: 'Enter your GitHub user name (required)',
        validate: gitInput => {
            if (gitInput){
                return true;
            } else {
                console.log('Please enter your GitHub user name');
                return false;
            };
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address (required)',
        validate: emailInput => {
            if (emailInput){
                var atSign =false;
                [...emailInput].forEach(letter => { // Got the [...emailInput] format from: https://betterprogramming.pub/how-to-iterate-through-strings-in-javascript-65c51bb3ace5
                     
                    if (letter === "@"){
                        atSign = true;
                    }
                })
                if (atSign){
                    return true;
                } else {
                    console.log(' Please enter a valid email');
                    return false;
                }
            } else {
                console.log('Please enter your email');
                return false;
            };
        }
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
