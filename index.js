// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        name: 'description'
    },
    {
        type: 'list',
        choices: [
            'MIT',
            'Apache',
            'GNU',
            'None'
        ],
        message: 'Please select which of the following licenses you would like to use.',
        name: 'license'
    },
    {
        type: 'input',
        message: 'Please enter the installation instructions',
        name: 'userInstall'
    },
    {
        type: 'input',
        message: 'Please enter usage instructions.',
        name: 'userUsage'
    },
    {
        type: 'input',
        message: 'Please enter the contributors on this project.',
        name: 'contributors'
    },
    {
        type: 'input',
        message: 'Enter the test script:',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'userName'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'userEmail'
    }
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
const contents = generateMarkdown(data);
fs.writeFileSync(fileName, contents)
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {writeToFile('README.md', answers)}) 
        .catch(error => {
            if(error){throw error}
        })
}
init();