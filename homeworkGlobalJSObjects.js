/*
Global JavaScript Objects (homework)
    
Math
Random
Create a function that builds an array of 10 random numbers between 1 and 50.
The function prints that array out in the console and then returns it.
*/

function createArr() {
    var result = [];
    for(var i=0; i<10; i++) {
        // result[result.length] = Math.floor(Math.random() * 50) + 1; 
        result[result.length] = (Math.random() * 50) + 1;
    }
    console.log(result);
    return result;
};

createArr();

/*
Round
Create a function that uses the passed array of numbers 
and rounds all its elements to two decimals.
Print out the modified array in the console.
Use the first function for generating the input array.
*/

function roundToTwoDecimals(arr) {
    var arr1 = [];
    for(var i=0; i<arr.length; i++) {
        arr1[arr1.length] = Number(Math.round(arr[i]+'e2')+'e-2');
    }
    return arr1;
};

var arr = createArr();
var result = roundToTwoDecimals(arr);
console.log(result);

// var a = 5.55555;
// a = Number(Math.round(a+'e2')+'e-2');
// console.log(a);

/*
Floor
Create a function that uses the passed array of numbers 
and rounds all its elements to the nearest integer.
Print out the modified array in the console.
Use the first function for generating the input array.
*/

function roundToNearestInt(arr) {
    var arr1 = [];
    for(var i=0; i<arr.length; i++) {
        arr1[arr1.length] = Math.round(arr[i]);
    }
    return arr1;
};

var result2 = roundToNearestInt(arr);
console.log(result2);

/*
Max
Create a function that finds and prints out 
the biggest element in the passed array of numbers.
*/    

function findMaxElement(arr) {
    var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
    });
    console.log(max);
}

findMaxElement(result2);


/*
Date
    
Print out the whole date object in the console.
Print out the current time in the console.
Print out the current date in the console.
*/

var date = new Date();
console.log(date);
console.log(date.getHours() + ":" +date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds());
console.log(date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear() + ".");

