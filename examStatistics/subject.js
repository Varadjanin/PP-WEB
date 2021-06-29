function Subject(name) {
    if (!name) {
        throw new Error('Field Name of the subject is required');
    }

    this.name = name;
}

Subject.prototype.getSubjectName = function() {
    return this.name;
}

// var js = new Subject("JS");
// console.log(js.getSubjectName());