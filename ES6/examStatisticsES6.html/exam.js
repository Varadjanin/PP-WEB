
class Exam {
    constructor(subject, student, grade) {
        if (!subject) {
            throw new Error('Field Subject is required');
        }
        if (!student) {
            throw new Error('Field Student is required');
        }
        if (!grade) {
            throw new Error('Field Grade is required');
        }
        // if (!(subject instanceof Subject)) {
        //     throw new Error('Invalid subject data');
        // }
        // if (!(student instanceof Student)) {
        //         throw new Error('Invalid student data');
        // }

        // if (grade != 5 || grade != 6 || grade != 7 || grade != 8 || grade != 9 || grade !=10) {
        //     throw new Error('The grade should be a number between 5 and 10.');
        // }
        this.subject = subject;
        this.student = student;
        this.grade = grade;
    };
    getExamInfo() {
        return `${this.subject}, ${this.student}`;
    };
    hasPassed() {
        return `${this.grade>5}`;
    };
};

// let exam = new Exam("js", "Marko", 5);
// console.log(exam.hasPassed());
// console.log(exam.getExamInfo());