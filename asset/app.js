const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choice = require("inquirer/lib/objects/choice");
const Choices = require("inquirer/lib/objects/choices");

// create prompt questions for employees

function teamPromptInfo (){

    return inquirer
      .prompt([
        {
            name: "name", 
            message: "Please enter Employee's name: ",
            type: "input",
           
        },
    
        {   
            name: "id",
            message: "Please enter Employee's id: ",
            type: "input",
        },

        {
            name: "email",
            message: "Please enter Employee's email: ",
            type: "input",
        },
        {
            message: "Enter the Employee's job title/role: ",
            name: "role",
            Choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        },
        {
            message: "Please enter Manager's office number: ",
            name: "office",

        },
        {
            message: "Please enter Intern's school: ",
            name: "school",

        },

        {
            name: "github",
            message: "Please Enter Engineer's github username: ",
            type: "input",
        },

        { 
            name: "Addtional",
            message: "Would you like to add another team member?",
        }
    ]);
}

teamPromptInfo ()
