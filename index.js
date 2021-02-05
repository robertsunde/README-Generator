// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = () =>
inquirer.prompt([
    {
        type: "input",
        name: "applicationtitle",
        message: "What is the title of your application/project?",
      },
      {
        type: "input",
        name: "description",
        message: "Enter a brief description about your application.",
      },
      {
        type: "input",
        name: "tableofcontents",
        message: "????",
      },
      {
        type: "input",
        name: "Installation",
        message: "Input information needed for product install/execution.",
      },
      {
        type: "input",
        name: "usage",
        message: "Enter usage details here.",
      },
      {
        type: "input",
        name: "contributions",
        message: "Include any contributors/resources here.",
      },
      {
        type: "input",
        name: "tests",
        message: "Enter test details here.",
      },
    ]);

questions()
.then((answers) => writeFileAsync('README.md', generateHTML(answers)))

// TODO: Create a function to write README file
function writeFile('README.md', data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
