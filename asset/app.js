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
  return emailFormat.test(input) || "Enter a valid @.com";
};

// create function to capture employer data
async function employerRole() {
  let name;
  let id;
  let role;
  let email;
  // create prompts to capture general Employee's information
  await inquirer
    .prompt([
      {
        message: "Enter the Employee's job title/role: ",
        name: "role",
        type: "list",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        name: "name",
        message: "Please enter Employee's name: ",
        type: "input",
        // validate answer
        validate: (input) => {
          if (input === "") {
            return "Employee's 'NAME' is required!";
          }
          return true;
        },
      },
      {
        name: "id",
        message: "Please enter Employee's id: ",
        type: "input",
        // validate answer
        validate: (input) => {
          if (input === "") {
            return "Employee's 'ID' is required!";
          }
          return true;
        },
      },
      {
        name: "email",
        message: "Please enter Employee's email: ",
        type: "input",
        // validate answer
        validate: email,
      },
    ])

    .then((res) => {
      name = res.name;
      id = res.id;
      role = res.role;
      email = res.email;
    });
  console.log("Employee:", role);
  // create switch statement to gather employee's info based on title/role
  switch (role) {
    case "Manager":
      await inquirer
        .prompt([
          {
            message: "Please enter your office number: ",
            name: "officeNumber",
            type: "input",
            //   validate answer
            validate: (answer) => {
              const isNumber = answer.match(/^[1-9]\d*$/);
              if (isNumber) {
                return true;
              }
              return "Numbers are required!";
            },
          },
          {
            name: "AddNewEmployee",
            message: "Would you like to add another team member?",
            type: "list",
            choices: ["yes", "no"],
          },
        ])

        .then((res) => {
          const manager = new Manager(name, id, email, res.officeNumber);
          teamMember = fs.readFileSync("templates/manager.html");
          teamOutput.push(manager);
          console.log("Successful, Team data:", teamOutput);

          if (res.AddNewEmployee === "yes") {
            employerRole();
          } else {
            console.log("No more profile to generate!");
            renderArray();// call render function
          }
        })
        .catch((err) => {
          console.log(err);
        });
      break;

    case "Engineer":
      await inquirer
        .prompt([
          {
            name: "github",
            message: "Please Enter Engineer's github username: ",
            type: "input",
          },
          {
            name: "AddNewEmployee",
            message: "Would you like to add another team member?",
            type: "list",
            choices: ["yes", "no"],
          },
        ])
        .then((res) => {
          const engineer = new Engineer(name, id, email, res.github);
          teamMember = fs.readFileSync("templates/engineer.html");
          teamOutput.push(engineer);
          console.log("Successful, Team data:", teamOutput);

          if (res.AddNewEmployee === "yes") {
            employerRole();
          } else {
            console.log("No more profile to generate!");
            renderArray(); //call render function
          }
        })
        .catch((err) => {
          console.log(err);
        });
      break;

    case "Intern":
      await inquirer
        .prompt([
          {
            name: "school",
            message: "Please Enter the your school name: ",
            type: "input",
          },
          {
            name: "AddNewEmployee",
            message: "Would you like to add another team member?",
            type: "list",
            choices: ["yes", "no"],
          },
        ])

        .then((res) => {
          const intern = new Intern(name, id, email, res.school);
          teamMember = fs.readFileSync("templates/intern.html");
          teamOutput.push(intern);
          console.log("Successful, Team data:", teamOutput);

          if (res.AddNewEmployee === "yes") {
            employerRole();
          } else {
            console.log("No more profile to generate!");
            renderArray(); //call the render
          }
        })
        .catch((err) => {
          console.log(err);
        });
      break;
  }
}

// create render array function to write to team.html from employee data
function renderArray() {
    console.log(teamOutput)
  fs.writeFile("output/team.html", render(teamOutput), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("You have successfully generated your Engineering Team's profile!");
  });
}

// create initialized function to start team profile generator
async function init() {
  await inquirer
    .prompt({
      message: "Would you like to generate Engineering Team?",
      name: "option",
      choices: ["yes", "no"],
    })
    .then((choice) => {
      console.log("answer:", choice);
      // always change response to toLowerCase
      const choices = choice.option.toLowerCase();
      if (choices === "yes") {
        employerRole();
      } else {
        console.log("Their is no Team's Profile to generate");
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

init();
