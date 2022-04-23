// Packages needed for this application
const fs = require('fs'); // filesystem
const inquirer = require('inquirer'); // inquirer module
const generateMarkdown = require('./utils/generateMarkdown.js'); // link to secondary js file


// An array of questions for user input
const questions = [
    {   // project title
        type: 'input',
        name: 'title',
        message: 'What is the project name? (required)',
        // required input so validation
        validate: titleInput => {
            if (titleInput){
                return true;
            } else {
                console.log('Please enter the project name');
                return false;
            };
        }
    },
    {   // project description
        type: 'input',
        name: 'description',
        message: 'Enter a description of the project (required)',
        // required input so validation
        validate: descInput => {
            if (descInput){
                return true;
            } else {
                console.log('Please enter a project description');
                return false;
            };
        }
    },
    {   // installation instructions
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions (optional)'
    },
    {   // user instructions
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for how to use the software? (optional)'
    },
    {   // license type - choose from list
        type: 'list',
        name: 'license',
        message: 'Choose a license type:',
        choices: ['GPL','Apache','Ms-PL','BSD','CDDL','EPL','MIT', 'No License'] // found license list on: https://www.whitesourcesoftware.com/resources/blog/open-source-licenses-explained/
    },
    {   // contributor guidelines
        type: 'input',
        name: 'contributors',
        message: 'Set out guidelines for contributors to this project (optional)'
    },
    {   // test data
        type: 'input',
        name: 'tests',
        message: 'Provide test data for the project (optional)'
    },
    {   // github account name
        type: 'input',
        name: 'githubUser',
        message: 'Enter your GitHub user name (required)',
        // required input so validation
        validate: gitInput => {
            if (gitInput){
                return true;
            } else {
                console.log('Please enter your GitHub user name');
                return false;
            };
        }
    },
    {   // email address
        type: 'input',
        name: 'email',
        message: 'Enter your email address (required)',
        // required input so validation
        validate: emailInput => {
            // extra validation to check email contains '@' sign
            if (emailInput){
                var atSign =false;
                [...emailInput].forEach(letter => { // Got the [...emailInput] format from: https://betterprogramming.pub/how-to-iterate-through-strings-in-javascript-65c51bb3ace5
                     
                    if (letter === "@"){
                        atSign = true;
                    }
                })
                if (atSign){ // if @ sign found in input - considered valid
                    return true;
                } else { // if no @ sign found in input
                    console.log(' Please enter a valid email');
                    return false;
                }
            } else { // if nothing entered
                console.log('Please enter your email');
                return false;
            };
        }
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, err =>{
        if (err){ // display error to user
            console.log(err);
            return;
        }
        // message to user on successful completion of file write
        console.log('README file created')
    })
}

// Function to initialize app
function init() {
    // call questions
    return inquirer.prompt(questions)
    .then(data => {
        // send data to be generated into .md format
        return generateMarkdown(data);
    }) // write generated .md to README.md
    .then(markdownText =>{
        writeToFile('./dist/README.md', markdownText)
    });
    
};

// Function call to initialize app
init();