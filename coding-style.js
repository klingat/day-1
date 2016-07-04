//Variable assignment
var age = 22; // <- don't forget semicolon at end of each statement
//     ^ ^ having white space around = sign is good :)
// it makes the code more readable

var name = "Kasia";

var num = 10;


// Curly brackets
if (num > 0) { // <- Always have {} even if you have one statement.
    console.log('the number is greater than zero')
}


// Functions

/*
These 3 different ways of declaring functions are not 100% equivalenet,
we will see the differences between them.

Use the first version.
*/

function doSomething(sentence) { // <- Use this type of function for coding
    // .. code goes here
}

var doSomething = function(sentence) {
    // .. code goes here
}

var doSomething = function doSomething(sentence) {
    // .. code goes here
}

