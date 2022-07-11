var stud1 = {
    id: "stud1",
    firstName: "Jeevi",
    lastName: "VR",
    batch: 2016,

    getFullName() {
        return this.firstName + "_" + this.lastName;
    }

}

var stud2 = {
    id: "stud2",
    firstName: "Arasu",
    lastName: "Kumar",
    batch: 2015,
    getFullName() {
        return this.firstName + "_" + this.lastName;
    }
}


console.log(stud1);

console.log(stud1.id);

console.log(stud1.getFullName());



console.log(stud2);

console.log(stud2.id);

console.log(stud2.getFullName());


//ES5
// Object Constructor
function Employee(empId, empName, empJoinYear) {
    console.log("My Employee Constructor got called....");
    this.id = empId;
    this.name = empName;
    this.joiningYear = empJoinYear;
    this.getExperience = function() {
        return (new Date().getFullYear() - this.joiningYear) + " Years of Experience";
    }
}
// u will get a memory allocated
var emp1 = new Employee("stud01", "Jeevi", 2016 );
var emp2 = new Employee("stud01", "Jeevi", 2016);

// emp1 == emp2 => false => comparison on object address
// JSON.stringfy(emp1) == JSON.stringfy(emp2) => true

console.log(emp1.id);
console.log(emp2);

console.log(emp1.getExperience());
console.log(emp2.getExperience());