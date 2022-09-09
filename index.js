//packages for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./assets/generateMarkdown");
const fs = require("fs");
const path = require("path");

//array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What's your project's name?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description.",
  },
  {
    type: "input",
    name: "install instructions",
    message: "Please provide install instructions.",
  },
  {
    type: "input",
    name: "information",
    message: "How to use this repo?",
  },
  {
    type: "input",
    name: "contribution",
    message: "Guidelines on how to contribute.",
  },
  {
    type: "input",
    name: "test",
    message: "Instructions on how to test on repo.",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license does your project have?",
    choices: ["ILP1", "ISC", "MIT", "none"],
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "about",
    message: "What is your email adress?",
  },
];

//function to write README file
//fs.writeFile("./dist/README.md");

//function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(generateMarkdown(answers));
  });
}

//call to initialize app
init();
