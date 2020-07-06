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

// email validation function 
const email = async (input) => {
    var emailFormat = /\S+@\S+\.\S+/;
    return emailFormat.test(input)||"Enter a valid @.com";
}

// create prompt function to capture employees information
function teamPromptInfo(){
    return inquirer
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
            type: "number",
             // validate answer
             validate: (input) => {
                if (input === 000) {
                    return "Numbers are required!"
                }
                return true;
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
            name: "Addtional",
            message: "Would you like to add another team member?",
            type: "list",
            choices: [
                "Yes",
                "No"
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
            // console.log(answers)
        }

      })


      .catch((error) => {

        console.log(error);

    })

     
// })
}

// create questions to start team profile generator
async function employeeIntro() {
        await inquirer.prompt({
            message: "Would you like to generate Employee Summary?",
            choices: [
                "yes",
                "no"
            ]
        })
    }
// function init () {
//     inquirer
//     .prompt(employeeQuestions)
//     .then((teamPromptInfo) => {
//         var role = inquirerResponse.role;
//         switch(role){
//             case "Manager":
//                 addManager();
//                 break;
//         }
//         switch(role){
//             case "Engineer":
//                 addEngineer();
//                 break;
//         }
//         switch(role){
//             case "Intern":
//                 addIntern();
//                 break;
//         }
//         switch(role){
//             case "Employee":
//                 addEmployee();
//                 break;
//         }
//         //console.log("Making HTML");
//         //console.log(inquirerResponse);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }
// init();

// async function init() {
//     await inquirer.prompt({
//         message: "Would you like to generate Employee Summary?",
//         choices: [
//             "yes",
//             "no"
//         ]
//     })
// if(data.choices === "yes") {
//     try {
//         const res = await teamPromptInfo();
//     }
//     catch (error) {
//         console.log(error);
//     };
// }
//     else if (data.choices === "no") {
// console.log("No report to generate!")
//     }
// };

// init();

// async function generateTeamInfo (teamPromptInfo) {

//     await inquirer.prompt({
//         message: "Would you like to generate Employee Summary?",
//         choices: [
//             "yes",
//             "no"
//         ]
//     })
//     .then(res => {

//         var res = "yes";
//         fs.copyFileSync('./templates/main.html', './output.html');
//         console.log("Time to generate you Team's Summary")
//     })

// }
teamPromptInfo ()
