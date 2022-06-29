class Employee {
   
   constructor(empId, empName, empJoinYear) {
    this.id = empId;
    this.name = empName;
    this.joiningYear = empJoinYear;
   }

    getExperience() {
        return (new Date().getFullYear() - this.joiningYear) + " Years of Experience";
    }
}

// Inheritance

class Manager extends Employee {

    constructor(empId, empName, empJoinYear, reviewAccess) {
        super(empId, empName, empJoinYear);
        this.reviewAccess = true;
    }

   changeJoinYear(newJoinYear) {
       this.joiningYear = newJoinYear; // In memory
   }
}

var mgr1 = new Manager("stud01", "Jeevi", 2016, true);
console.log(JSON.stringify(mgr1));
mgr1.changeJoinYear(2018);
console.log(mgr1);

// ES5
// module.exports = Employee;
