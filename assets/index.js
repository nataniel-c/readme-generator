// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');


// TODO: Create an array of questions for user input
//
const questions = [
    'Welcome to the README generator.\nWhat is the title for your project?',
    'Please enter a short description for your project:',
    'Please enter installation instructions for your project:',
    'Please enter usage information for your project:',
    'Please enter the contribution guidelines for your project:',
    'Please enter test instructions for your application:',
    'What license would you like to attribute to your project?',
    'What is your GitHub username?',
    'Final question: what is your email address?'
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, 
        (err) => {
    err ? console.error(err) : console.log('Data written to README.md')
        }
    );

}

// TODO: Create a function to initialize app
function init() {
inquirer
  .prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'title',
    },
    {
        type: 'input',
        message: questions[1],
        name: 'description',
    },
    {
        type: 'input',
        message: questions[2],
        name: 'installation',
    },
    {
        type: 'input',
        message: questions[3],
        name: 'usage',
    },
    {
        type: 'input',
        message: questions[4],
        name: 'contribution',
    },
    {
        type: 'input',
        message: questions[5],
        name: 'test',
    },
    {
        type: 'list',
        message: questions[6],
        name: 'license',
        choices: ['Apache', 'Boost', 'BSD', 'Creative Commons', 'Eclipse', 'GNU', 'IBM', 'MIT', 'Mozilla' , 'Open Data Commons', 'Perl', 'Zlib', 'NONE']
    },
    {
        type: 'input',
        message: questions[7],
        name: 'username',
    },
    {
        type: 'input',
        message: questions[8],
        name: 'email',
    }
  ])
  .then((response) => {
    markdown = generateMarkdown(response);
    writeToFile('README.md', markdown);
  }
  );
}

// Function call to initialize app
init();