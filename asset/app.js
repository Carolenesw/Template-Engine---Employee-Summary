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
// const { title } = require("process");

// email validation function 
const email = async (input) => {
    var emailFormat = /\S+@\S+\.\S+/;
    return emailFormat.test(input)||"Enter a valid @.com";
}

// create function to capture employer data
async function employerRole() {

// create prompts to capture general Employee's information
   await inquirer
 .prompt([
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
   
.then((res) => {
    empName = res.name;
    empId = res.id;
    title = res.title;
    empEmail = res.email
});
console.log(title)
// create switch statement to gather employee's info based on title
switch(title) {
    case "Manager":
        await inquirer.prompt([{
            message: "Please enter your office number: ",
            name: "officeNum",
            type: "input",
            //   validate answer
            validate: answer => {
                const isNumber = answer.match(/^[1-9]\d*$/);
                    if (isNumber) {
                       return true; 
                    }
                    return "Numbers are required!";
        }
        }])
        .then((res) => {
            const manager = new Manager(empName, empId, empEmail, res.officeNum);
            teamMember = fs.readFileSync("templates/manager.html");
            teamOutput.push(manager)
        });
        break;

        case "Engineer":
        await inquirer.prompt([{
            name: "github",
            message: "Please Enter Engineer's github username: ",
            type: "input"
             }
        ])
        .then((res) => {
            const engineer = new Engineer(name, id, email, res.github);
            teamMember = fs.readFileSync("templates/manager.html");
            teamOutput.push(engineer)
        });
        break;

        case "Intern":
            await inquirer.prompt([{
                name: "school",
                message: "Please Enter the your school name: ",
                type: "input"
                 }
            ])
            .then((res) => {
                const intern = new Intern(name, id, email, res.school);
                teamMember = fs.readFileSync("templates/manager.html");
                teamOutput.push(intern)
            });
            break;
            
    
        
}

} 
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
                
            } else {
               console.log("Their is no Team's Profile to generate");
            }
        })
        .catch((err) => {
            console.log(err);
        })
        
    }

init()