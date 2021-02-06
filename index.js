// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');



// TODO: Create an array of questions for user input
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
        message: "Table of Contents",
      },
      {
        type: "input",
        name: "installation",
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

  ]).then(answers => {
    const{applicationtitle, description, tableofcontents, installation, usage, contributions, input } = answers;




  const readMeCreator = '${applicationtitle}
  ${description}
  '

  })

// TODO: Create a function to write README file
fs.writeFileFile("README.md", readMeCreator) {}

// ^^^ FIGURE THIS OUT IN MORNING



// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
