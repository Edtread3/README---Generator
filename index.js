// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const generateMarkdown = require("./generateMarkdown"); 



   
    

// TODO: Create an array of questions for user input
const questions = [{
            type: 'input',
            message: 'Title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Give a brief description of project?',
            name: 'description',
        },
        {
            type: 'checkbox',
            message: 'Select a license used for project:',
            name: 'license',
            choices: ['MIT' , 'Apache 2.0' , 'Eclipse', 'ISC',],
        },
        {
            type: 'input',
            message: 'What packages did you install to make project function?',
            name: 'installations',
        },
        {
        
            type: 'input',
            message: 'What is your name?',
            name:'name',
        },
        {
            type: 'input',
            message: 'Where do you live?',
            name: 'city',
        },
        {
            type: 'input',
            message: 'Tell me about yourself?',
            name: 'bio',
        },
        {
            type: 'input',
            message: 'What is your LinkdIn account?',
            name: 'LinkdIn',
        },
        {
            type: 'input',
            message: 'What is your Github account?',
            name: 'Github',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'Email',
        },
      ]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
};


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
       console.log("Success ReadMe file Created!");
    writeToFile("./README.md", generateMarkdown({response}))
    });
        

}

// Function call to initialize app
init();
