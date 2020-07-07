
// create employee class with constructors
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    
  }

// add functions to return constructors with functions 
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
      
// export employee to all positions
    module.exports = Employee;