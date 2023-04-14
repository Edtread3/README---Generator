// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const generateMarkdown = require("./generateMarkdown"); 



   
    

// TODO: Create an array of questions for user input
const questions = [{
            type: 'input',
            message: 'Whats the Title of your project?',
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
            choices: ['MIT' , 'Apache 2.0' , 'Eclipse', 'ISC', 'none',],
        },
        {
            type: 'input',
            message: 'What packages did you install to make project function?',
            name: 'installations',
        },
        {
            type: 'input',
            message: 'What were the technologies used for this project?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'List any Contributors if any?',
            name: 'contributors',
        },
        {
            type: 'input',
            message: 'Were there any test ran for project?',
            name: 'test',
        },
        {
        
            type: 'input',
            message: 'What is your name?',
            name:'name',
        },
        {
            type: 'input',
            message: 'What city or state do you currently live in?',
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
            name: 'linkdin',
        },
        {
            type: 'input',
            message: 'What is your Github username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your Email?',
            name: 'email',
        },
      ]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
};


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
       console.log("Success!!!.. ReadMe file Created!");
    writeToFile("./README.md", generateMarkdown(response))
    });
        

}

// Function call to initialize app
init();
