
const Employee = require("./Employee")


// add intern class as an extension of employee class with it's own constructor
class Intern 
extends Employee {
  constructor(name, id, email, school) {
    

    super(name, id, email);
    this.school = school;
    
  }
  getRole() {
    return "Intern";
  }

  getSchool() { 
      return this.school;
  }
}
module.exports = Intern;