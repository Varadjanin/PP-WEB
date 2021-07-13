
let exams = [];
let students = [];
let countPassed = 0;
let countFailed = 0;

function collectData () {
	let subjectSelect = document.querySelector('.subject').value;
	let studentInput = document.querySelector('.student').value;
    let studentName = studentInput.split(" ")[0];
    let studentSurname = studentInput.split(" ")[1];
	let gradeSelect = parseInt(document.querySelector('.grade').value);
	let subjectObject = new Subject (subjectSelect);
	let studentObject = new Student (studentName, studentSurname);
	let examObject = new Exam(subjectObject.name, studentObject.getStudentData(), gradeSelect);
	
	students.push(studentObject);
	exams.push(examObject);
	
	document.querySelector('.subject').value = '';
	document.querySelector('.student').value = '';
	document.querySelector('.grade').value = '';
};

function validateData () {
	// if(document.querySelector('.subject').value == '') {
		//     throw new Error ()
		// }
	}
	
function updateLists() {
	
	let passedUl = document.querySelector('.passedUl');
	let failedUl = document.querySelector('.failedUl');
	let lastExam = exams[exams.length-1];

	if(lastExam.grade>5) {  //didn't work when the if condition was - exams[exams.length-1]
		countPassed++;
		
		let passedTr = document.createElement("tr");
		let passedTd1 = document.createElement("td");
		let passedTdGrade = document.createElement("td");
		
		passedTd1.textContent = lastExam.getExamInfo();
		passedTdGrade.textContent = lastExam.grade;
		passedTdGrade.className = 'grade_right';
		
		passedTr.appendChild(passedTd1);
		passedTr.appendChild(passedTdGrade);
		passedUl.appendChild(passedTr);
	
	} else {
		countFailed++;
		
        let failedTr = document.createElement("tr");
        let failedTd1 = document.createElement("td");
        let failedTdGrade = document.createElement("td");
		
        failedTd1.textContent = lastExam.getExamInfo();
        failedTd1.style.color = "black";
		failedTdGrade.textContent = lastExam.grade;
        failedTdGrade.className = 'grade_right';
        failedTdGrade.style.color = "black";
		
        failedTr.appendChild(failedTd1);
        failedTr.appendChild(failedTdGrade);
		failedUl.appendChild(failedTr);

		console.log("nije prosao");
		console.log(lastExam.hasPassed());

	};
};

function updateHeader() {
	let total = document.querySelector('h2');
	totalNo = `${countPassed + countFailed}`;
	total.innerHTML = `Total students: ${totalNo}`;
	
    let passedNo = document.querySelector('.countP');
	passedNo.textContent = `${countPassed}`;
	
	let failedNo = document.querySelector('.countF');
	failedNo.textContent = `${countFailed}`;
	let percentageF = document.querySelector('.percentageF');
	percentageF.textContent = `${Math.floor((countFailed*100)/(countPassed + countFailed))}%`;
}

let buttonAdd = document.querySelector(".button");

buttonAdd.addEventListener("click", function() {
    collectData();
    validateData();
    updateLists();
    updateHeader();
});