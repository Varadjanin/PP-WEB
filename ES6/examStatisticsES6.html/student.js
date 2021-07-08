
class Student {
    constructor(name, surname) {
        if (!name) {
            throw new Error('Field Name is required');
        }
        if (!surname) {
            throw new Error('Field Surname is required');
        }
    
        if(name[0] != name[0].toUpperCase()) {
            throw new Error("Name should start with a capital letter, you ignorant person!");
        }
    
        if(surname[0] != surname[0].toUpperCase()) {
            throw new Error("Surname should also start with a capital letter, you truly ignorant person!");
        }
    
        this.name = name;
        this.surname = surname;
    };
    getStudentData() {
        return this.name + " " + this.surname;
    };
};


// var marko = new Student("Marko", "Varadjanin");
// console.log(marko.getStudentData());