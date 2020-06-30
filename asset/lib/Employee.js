// TODO: Write code to define and export the Employee class
// create employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    // this.Employee = getRole
  }


getName() {
  return this.name;
}
getId() {
  return this.id;
}
getEmail() {
  return this.email;
}
getRole() {
  return "Employee";
}
}
      

    //   create employee prototype name, Id and emal
      // Employee.prototype.return = function() {
      //   return 
      //   this.getName
      //   this.getId 
      //   this.getEmail
      //   // Employee
      // };

    //   Employee.prototype.return = function() {
    //     return
    //     this.getName = true;
    //     this.getId = true;
    //     this.getEmail = true;
    //   };

    module.exports = Employee;