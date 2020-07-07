const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// create array to push teamMember's information
var teamOutput = [];

const render = require("./lib/htmlRenderer");
const Choice = require("inquirer/lib/objects/choice");
const Choices = require("inquirer/lib/objects/choices");
const Employee = require("./lib/Employee");

// email validation function 
const email = async (input) => {
    var emailFormat = /\S+@\S+\.\S+/;
    return emailFormat.test(input)||"Enter a valid @.com";
}

// create function to capture employer role
function employerRole() {
    inquirer.prompt([
        {
            message: "Enter the Employee's job title/role: ",
            name: "title",
            type: "list",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        }]) 
.catch((error) => {

  console.log(error);
})
}
// employerRole()
// create prompt function to capture general employee's information
// function teamPromptInfo(){
//          inquirer
//       .prompt([
//         {
//             name: "name", 
//             message: "Please enter Employee's name: ",
//             type: "input", 
//             // validate answer
//             validate: (input) => {
//                 if (input === "") {
//                     return "Employee's 'NAME' is required!"
//                 }
//                 return true;
//             }
//         },
//         {   
//             name: "id",
//             message: "Please enter Employee's id: ",
//             type: "input",
//             // validate answer
//             validate: (input) => {
//                 if (input === "") {
//                     return "Employee's 'ID' is required!"
//                 }
//                 return true;
//             }
//         },
//         {
//             name: "email",
//             message: "Please enter Employee's email: ",
//             type: "input", 
//             // validate answer
//             validate: email
//         },

//         {
//             message: "Please enter Intern's school: ",
//             name: "school"
//         },
//         {
//             name: "github",
//             message: "Please Enter Engineer's github username: ",
//             type: "input"
//         },
//         { 
//             name: "AddNewEmployee",
//             message: "Would you like to add another team member?",
//             type: "list",
//             choices: [
//                 "Engineer",
//                 "Intern",
//                 "I don't want to add any more team members"
//             ]
//         }
//       ])
//       .then(answers => {
//         //   create variable to hold response
//         let name = answers.name;
//         let id = answers.id;
//         let title = answers.title;
//         let email = answers.email

//         if (answers) {
//             console.log("Success!", answers);
//         }
// add switch statement to capture individual roles/position
        // switch(title) {
        //     // add manager info
        //     case "Manager":
        //          inquirer.prompt([
        //             {
        //                 message: "Please enter your office number: ",
        //                 name: "officeNum",
        //                 type: "input",
        //                  // validate answer
        //                  validate: answer => {
        //                      const isNumber = answer.match(/^[1-9]\d*$/);
        //                     if (isNumber) {
        //                        return true; 
        //                     }
        //                     return "Numbers are required!";
        //                 }
        //         }])
        //         .then(res => {
        //         const manager = new Manager(name, id, email, res.officeNum);
        //         const teamMember = fs.readFileSync("templates/manager.html");
        //         const teamOutput =  await employeeSummary(teamMember, answers.AddNewEmployee);
        //         // teamOutput.push(teamMember)
        //         console.log(teamOutput)
        //         })
        // }
//       })
//       .catch((error) => {

//         console.log(error);
//     })
// }

// create initialized function to start team profile generator
async function init() {
    
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
                employerRole()
                // return;
            } else {
               console.log("Their is no Team's Profile to generate");
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

init()


// function generateTeamSummary () {
//     inquirer.prompt(teamPromptInfo)
//     .then((answers) => {
//         var title = answers.title;
//     // var answers = await answers
//     // var answers = await teamPromptInfo()
// console.log("team's data:", title)
// })
// .catch((err) => {
//     console.log(err);
// });
// }

// generateTeamSummary()
// switch(title) {
//     // add manager info
//     case "Manager":
//          inquirer.prompt([
//             {
//                 message: "Please enter your office number: ",
//                 name: "officeNum",
//                 type: "input",
//                  // validate answer
//                  validate: answer => {
//                      const isNumber = answer.match(/^[1-9]\d*$/);
//                     if (isNumber) {
//                        return true; 
//                     }
//                     return "Numbers are required!";
//                 }
//         }])
//         .then(res => {
//         const manager = new Manager(name, id, email, res.officeNum);
//         const teamMember = fs.readFileSync("templates/manager.html");
//         const teamOutput =  await employeeSummary(teamMember, answers.AddNewEmployee);
//         // teamOutput.push(teamMember)
//         console.log(teamOutput)
//         })
// }