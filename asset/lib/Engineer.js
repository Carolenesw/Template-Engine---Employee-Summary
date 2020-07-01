
const Employee = require("./Employee")

// add engineer class as an extension of employee class with it's own constructor
class Engineer 
extends Employee {
  constructor(name, id, email, github) {
    

    super(name, id, email);
    this.github = github;
    
  }
  getRole() {
    return "Engineer";
  }

  getGithub() { 
      return this.github;
  }
}
module.exports = Engineer;