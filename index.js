// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')


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

  ])

  // writes readme file
    .then((answers) => fs.writeFileSync('README.md', READMECreator(answers)))


  
// contents of readme file
 const READMECreator = (answers) => {
return `
${answers.applicationtitle}
${answers.description}
  Table of Contents
# ${answers.applicationtitle}
## ${answers.description}


${answers.installation}


`
  }

