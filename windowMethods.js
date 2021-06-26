/*
Window Methods
Create a function that shows the user a greeting message using alert
Then a question is presented to the user using prompt
When the user provides the answer, that answer is used in the confirm dialog
The format of the message in the dialog should be: "We will submit this answer now! " + the answer
If the user clicks OK, show alert with success message
If the user clicks Cancel, don't show anything
*/

function alerting() {
    alert("Hello! I am an alert just for you!");
    var question = prompt("What is your name?");
    if (question != null) {
        var answer = confirm("We will submit this answer now, " + question + "!");
        if(answer == true) {
            alert ("All good!");
        } else {
            console.log ("Nothing happened!");
        };
    };
};

alerting();

