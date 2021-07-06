/*
Employees and Managers ES6

Create constructor functions with properties representing the following:
Person: name, surname
Employee: inherits Person and has job and salary
Developer: inherits from Employee and has specialization
Manager: inherits from Employee and has department

All developers should inherit method:
getSpecialization which prints out the name of the specialization

All managers should inherit methods:
getDepartment which prints out the name of the department
changeDepartment which sets the department value on the given value

All employees should inherit methods:
getData which returns the name, surname and salary 
getSalary which prints out the salary
increaseSalary which increases the salary by 10% 
*/

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}
 
class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname);
        this.job = job;
        this.salary = salary;
    }
    getData() {
        console.log(this.salary);
    };
    getSalary() {
        console.log(this.salary);
    };
    increaseSalary() {
        return this.salary = this.salary + ((this.salary * 10) / 100);
    };
}

class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary);
        this.specialization = specialization;
    };
    getSpecialization() {
        console.log (this.specialization);
    }
}

class Manager extends Employee {
    constructor(name, surname, job, salary)
}




function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;


Manager.prototype.getDepartment = function () {
    console.log(this.department);
};
Manager.prototype.changeDepartment = function (newDepartment) {
    this.department = newDepartment;
    return this.department;
};


//testing:
var osoba = new Person('Pera', 'Peric');
var employee = new Employee('Pera', 'Peric', "typing", 500);
var developer = new Developer('Pera', 'Peric', "typing", 700, "JS");
var manager = new Manager('Pera', 'Peric', "typing", 1000, "HR");

console.log(osoba, employee, developer, manager);

console.log(employee.getData());
employee.getSalary();
console.log(employee.increaseSalary());
console.log(employee);
developer.getSpecialization();
manager.getDepartment();
console.log(manager.changeDepartment("Finance"));
console.log(manager);
