
const Employee = require("./Employee")


// add manager as an extension of employee class
class Manager 
extends Employee {
  constructor(name, id, email, officeNumber) {
    

    super(name, id, email);
    this.officeNumber = officeNumber;
    
  }
  getRole() {
    return "Manager";
  }

  getOfficeNumber() { 
      return this.officeNumber;
  }
}
module.exports = Manager;