// Packages needed for this application
const inquirer = require('inquirer')
const generateSvg = require('./lib/shapes')
const fs = require('fs')
// Create an array of questions to store the users input
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'What do you want the text of your logo to be?',
    filter(val) {
      return val.length > 3
        ? '\x1b[31m Please enter 3 characters or less \x1b[0m'
        : val
    },
  },
  // If the users text is greater than 3 characters, re prompt them.
  {
    type: 'input',
    name: 'textValidation',
    message: 'What do you want the text of your logo to be?',
    when: (answers) => answers.text.length > 3,
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'What color do you want the text to be?',
    filter: (val) => val.toLowerCase(),
  },
  {
    type: 'list',
    name: 'shape',
    message: 'What shape do you want your logo to be?',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'What color do you want the shape to be?',
    filter: (val) => val.toLowerCase(),
  },
]

// Create a function to write SVG file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err
      ? console.error(err)
      : console.log('\x1b[32m Generated logo.svg \x1b[0m')
  })
}

//Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // First we store our data into a json string and parse it after
    const data = JSON.stringify(answers)
    // We are calling writeToFile and passing in our arguments.
    // Arguments being the file path, and our parsed markdown data.
    writeToFile('examples/logo.svg', generateSvg(data))
  })
}

// Function call to initialize app
init()
