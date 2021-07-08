
class Subject {
    constructor(name) {
        if (!name) {
            throw new Error('Field Name of the subject is required');
        };
    
        this.name = name;
    };
    getSubjectName() {
        return this.name;
    }
}



// var js = new Subject("JS");
// console.log(js.getSubjectName());