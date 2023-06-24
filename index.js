// Packages needed for this application
const inquirer = require('inquirer')
const generateSvg = require('./lib/generateSvg')
const generateHtml = require('./lib/generateHtml')
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
const writeSvgFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    err
      ? console.error(err)
      : console.log('\x1b[32m Generated logo.svg \x1b[0m')
  })
}
// Create a function to write HTML file
const writeHtmlFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    err
      ? console.error(err)
      : console.log('\x1b[32m Generated logo.html \x1b[0m')
  })
}

//Create a function to initialize app
const init = () => {
  inquirer.prompt(questions).then((answers) => {
    const data = JSON.stringify(answers)
    writeSvgFile('examples/logo.svg', generateSvg(JSON.parse(data)))
    writeHtmlFile(
      'examples/logo.html',
      generateHtml(generateSvg(JSON.parse(data)))
    )
  })
}
// Function call to initialize app
init()
