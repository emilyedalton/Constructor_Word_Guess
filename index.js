const inquirer = require("inquirer");

const wordList = ["red", "blue", "green", "red", "orange","yellow", "brown"]

inquirer.prompt([

    {
      type: "input",
      name: "name",
      message: "Please a guess a letter?"
    },
]);
var LetterAnswer = answer.name
console.log (LetterAnswer);