
var exams = [];
var students = [];
var countPassed = 0;
var countFailed = 0;

function collectData () {
	var subjectSelect = document.querySelector('.subject').value;
	var studentInput = document.querySelector('.student').value;
    var studentName = studentInput.split(" ")[0];
    var studentSurname = studentInput.split(" ")[1];
	var gradeSelect = parseInt(document.querySelector('.grade').value);
	var subjectObject = new Subject (subjectSelect);
	var studentObject = new Student (studentName, studentSurname);
	var examObject = new Exam(subjectObject.name, studentObject.getStudentData(), gradeSelect);
	
	students.push(studentObject);
	exams.push(examObject);
	
	document.querySelector('.subject').value = '';
	document.querySelector('.student').value = '';
	document.querySelector('.grade').value = '';
}

function validateData () {
    // if(document.querySelector('.subject').value == '') {
    //     throw new Error ()
    // }
}

function updateLists () {

	var passedUl = document.querySelector('.passedUl');
	var failedUl = document.querySelector('.failedUl');
	if (exams[exams.length-1].hasPassed()) {
		countPassed++;

        var passedTr = document.createElement("tr");
        var passedTd1 = document.createElement("td");
        var passedTdGrade = document.createElement("td");
        
        passedTd1.textContent = exams[exams.length-1].getExamInfo();
		passedTdGrade.textContent = exams[exams.length-1].grade;
        passedTdGrade.className = 'grade_right';

        passedTr.appendChild(passedTd1);
        passedTr.appendChild(passedTdGrade);
		passedUl.appendChild(passedTr);
		
	}
	else {
		countFailed++;
		
        var failedTr = document.createElement("tr");
        var failedTd1 = document.createElement("td");
        var failedTdGrade = document.createElement("td");

        failedTd1.textContent = exams[exams.length-1].getExamInfo();
        failedTd1.style.color = "black";
		failedTdGrade.textContent = exams[exams.length-1].grade;
        failedTdGrade.className = 'grade_right';
        failedTdGrade.style.color = "black";
		
        failedTr.appendChild(failedTd1);
        failedTr.appendChild(failedTdGrade);
		failedUl.appendChild(failedTr);
	}
}

function updateHeader () {
	var total = document.querySelector('h2');
	totalNo = (countPassed + countFailed);
	total.innerHTML = 'Total students: ' + totalNo;

    var passedNo = document.querySelector('.countP');
	passedNo.textContent = countPassed;
	
	var failedNo = document.querySelector('.countF');
	failedNo.textContent = countFailed;
	var percentageF = document.querySelector('.percentageF');
	percentageF.textContent = Math.floor((countFailed*100)/(countPassed + countFailed)) + "%";
}

var buttonAdd = document.querySelector(".button");

buttonAdd.addEventListener("click", function() {
    collectData();
    validateData();
    updateLists();
    updateHeader();
});