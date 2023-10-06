// TODO: Include packages needed for this application
const inquirer = require('inquirer@8.2.4');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');


// TODO: Create an array of questions for user input
// Readme requires:
// Description
//
const questions = [
    'What is the title for your project?',
    'Please enter a short description for your project:',
    'Please enter installation instructions for your project:',
    'Please enter usage information for your project:',
    'Please enter the contribution guidelines for your project:',
    'Please enter test instructions for your application:',
    'What license would you like to attribute to your project?'
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Data written to README')
);

}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      message: questions[1],
      name: 'title',
    },
    {
        type: 'input',
        message: questions[2],
        name: 'description',
    },
    {
        type: 'input',
        message: questions[3],
        name: 'installation',
    },
    {
        type: 'input',
        message: questions[4],
        name: 'usage',
    },
    {
        type: 'input',
        message: questions[5],
        name: 'contribution',
    },
    {
        type: 'input',
        message: questions[6],
        name: 'test',
    },
    {
        type: 'input',
        message: questions[7],
        name: 'license',
    }

  ])
  .then((response) => 
        writeToFile('README.md', response);
        generateMarkdown(response.license);
        // : console.log('Please fill out all required information.')
    
  );
}

// Function call to initialize app
init();