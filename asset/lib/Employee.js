// TODO: Write code to define and export the Employee class
// function Employee(name, Id, email) {
//     this.name = name;
//     this.Id = Id;
//     this.Email = email;
// create employee class
var Employee = function(getName, getId, getEmail) {
        this.name = getName;
        this.id = getId;
        this.email = getEmail;
      };

    //   create employee prototype
      Employee.prototype.return = function() {
        return 
        this.getName
        this.getId 
        this.getEmail
      };

    //   Employee.prototype.get = function() {
    //     get
    //     this.getName
    //     this.getId 
    //     this.getEmail
    //   };

    module.exports = Employee;