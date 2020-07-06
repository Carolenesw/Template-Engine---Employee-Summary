const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
// var team = [];
const render = require("./lib/htmlRenderer");
const Choice = require("inquirer/lib/objects/choice");
const Choices = require("inquirer/lib/objects/choices");
const Employee = require("./lib/Employee");

// email validation function 
const email = async (input) => {
    var emailFormat = /\S+@\S+\.\S+/;
    return emailFormat.test(input)||"Enter a valid @.com";
}

// create prompt function to capture employees information
function teamPromptInfo(){
         inquirer
      .prompt([
        {
            name: "name", 
            message: "Please enter Employee's name: ",
            type: "input", 
            // validate answer
            validate: (input) => {
                if (input === "") {
                    return "Employee's 'NAME' is required!"
                }
                return true;
            }
        },
        {   
            name: "id",
            message: "Please enter Employee's id: ",
            type: "input",
            // validate answer
            validate: (input) => {
                if (input === "") {
                    return "Employee's 'ID' is required!"
                }
                return true;
            }
        },
        {
            name: "email",
            message: "Please enter Employee's email: ",
            type: "input", 
            // validate answer
            validate: email
        },
        {
            message: "Enter the Employee's job title/role: ",
            name: "title",
            type: "list",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        },
        {
            message: "Please enter Manager's office number: ",
            name: "officeNum",
            type: "input",
             // validate answer
             validate: answer => {
                 //console.log("number vali:", input);
                 const isNumber = answer.match(/^[1-9]\d*$/);
                if (isNumber) {
                   return true; 
                }
                return "Numbers are required!";
            }
        },
        {
            message: "Please enter Intern's school: ",
            name: "school"
        },
        {
            name: "github",
            message: "Please Enter Engineer's github username: ",
            type: "input"
        },
        { 
            name: "AddNewEmployee",
            message: "Would you like to add another team member?",
            type: "list",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add any more team members"
            ]
        }
      ])
      .then(answers => {
        //   create variable to hold response
        let name = answers.name;
        let id = answers.id;
        let title = answers.title;
        let email = answers.email

        if (answers) {
            console.log("Success!", answers);
        }

      })
      .catch((error) => {

        console.log(error);
    })
}

// create questions to start team profile generator
async function employeeIntro() {
    
        await inquirer.prompt({
            message: "Would you like to generate Employee Summary?",
            name: "option",
            choices: [
                "yes",
                "no"
            ]
        })
        .then(choice => {
            console.log("answer:", choice)
            if(choice.option === "yes") {
                teamPromptInfo()
                // return;
            } else {
               console.log("Their is no Team's Profile to generate");
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

employeeIntro()
