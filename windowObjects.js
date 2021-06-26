/*
BOM (Window object)
window.navigator
    Create a function that prints out in the console the following information
        ● the platform on which the browser is running
        ● the information about the browser version
        ● the company that created that browser
    Each piece of information should be printed out in a new row.
    Create new “isOnline” function that checks if the browser is online.
        It should print out “online” when the browser is online and “offline” when there is
        no Internet connection.

window.screen
    Create a function that prints out the following information in the console:
        ● current browser width and height
        ● max possible browser height

window.location
    Write a function that prints out website’s url information in the console:
        ● full url address
        ● domain name
        ● used protocol
        ● parameters which are part of URL.
    Create a function for reloading the page.
    Create a function that redirects you to a website address passed to it.
    Test all three functions

window.localStorage
    Create a function that stores passed data in the browser local storage.
    Create a function that reads the stored data, and print it out in console.
    If there is no data, print "There is no data" in the console.
    Create a function that removes data from the local storage.
    Use the previously created functions to store/read/remove some data.
    Then add some data in storage and close the browser.
    Open the browser again on the same page and use the function to read the
    stored value.
    Modify functions to work with sessionStorage instead of localStorage.
    Try same scenario as with localStorage to examine data livecycle.

window.history
    Play around with the browser forward/back navigation.
    Implement a function that navigates two pages back.*/

    
var someText = "Some text";
console.log(someText);

(function () {
    console.log("Platform: " + navigator.platform + ";" + "\n");
    console.log("Browser version: " + navigator.appVersion + ";" + "\n");
    console.log("The company that created the browser: " + navigator.appName + ";" + "\n");
}) ();

function isOnline() {
    if(navigator.onLine===true) {
        console.log("Online");
    } else {
        console.log("Offline");
    }
};
isOnline();

(function() {
    console.log("Current browser width and height: " + screen.availWidth + "px, " + screen.availHeight + "px;" + "\n");
    console.log("Max possible browser height: " + screen.height + "px;" + "\n");
}) ();

(function() {
    console.log("Full URL address: " + location.href + "\n");
    console.log("Domain name: " + location.hostname + "\n");
    console.log("Protocol: " + location.protocol + "\n");
    console.log("Parameters of URL: " + location.origin + "\n" + "\t\t\t\t" + location.pathname + "\n");
}) ();

function reloadPage() {
    location.reload();
};
//reloadPage();

function redirectTo(web_address) {
    location.assign(web_address);
}
//redirectTo("https://www.w3schools.com");



function createItem() {
    localStorage.setItem("mytime", Date.now());
    //sessionStorage.setItem("mytime", Date.now());
}; 
function readValue() {
    var x = localStorage.getItem("mytime");
    //var x = sessionStorage.getItem("mytime");
    if(!x) {
        console.log("There is no data.")
    } else {
        console.log(x);
    };
};
function deleteItem() {
    localStorage.removeItem("mytime");
    //sessionStorage.removeItem("mytime");
};
createItem();
readValue();
deleteItem();
readValue();

window.history.forward();
function goBackTwice() {
    window.history.go(-2);
};
goBackTwice();