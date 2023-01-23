// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
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
            'GNU GPLv3',
            'Apache License 2.0',
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
    let license = '';
    switch (data.license) {
        case 'Apache':
            license='[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            break;
        case 'GNU':
            license='[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
            break;
        case 'MIT':
            license='[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
        default:
            break;
    }
        const contents = `
# ${data.title}
${license}
## Description\n${data.description}\n
## Table of contents\n
- [Installation](#Insallation)\n
- [Usage](#Usage)\n
- [Contribution](#Contributing)\n
- [Test](#Test)\n
- [Questions](#Questions)\n
## Installation\n${data.userInstall}\n
## Usage\n${data.userUsage}\n
## Contributing\n${data.contributors}\n
## Tests\n${data.tests}\n
## Questions\n
GitHub Username: [${data.userName}](https://github.com/${data.userName})\n
Email Address: [${data.userEmail}](${data.userEmail})`;

fs.writeFileSync(fileName, contents)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {writeToFile('README.md', answers)}) 
        .catch(error => {
            if(error){
                throw error
            }
        })
}
init();