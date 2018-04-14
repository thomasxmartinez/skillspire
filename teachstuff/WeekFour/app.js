'use strict';

// Boolean Values have two possible values: true or false.

// One way of producing boolean values is by using the following comparison operators:

//  ==     -Checks if a value is equal to another
//  ===    -Checks if a value is 'strictly' equal to another
//  !=     -! means 'not'. So this checks if one value is not equal to another
//  !==    -Checks if a value is strictly not equal to another
//  <      -Checks if the value on left is less than the value on the right
//  >      -Checks if the value on left is greater than the value on the right
//  <=     -Checks if the value on left is less than or equal to the value on right
//  >=     -Checks if the value on left is greater than or equal to value on right

console.log(3 > 2); //true

// Checks if Unicode value of the first letter is great than the value of the first
// letter on the right. The Unicode standard assigns a number to every character.
// This evaluates to true because the Unicode value of 's' is less than 'b'.

console.log('Hulkamania' > 'Undertaker'); //true

console.log('Kobe Bryant' > 'Lebron'); //false

// We can also use these comparison operators to compare the length of one string
// with another string.

console.log('Kobe Bryant'.length > 'Lebron'.length); //true

// NaN is the result of a statement that doesn't make sense. The reason this is
// false is that the result of one nonsensical statement isn't equal to the result
// of another.
console.log(NaN == NaN); //false

//    Logical operators can be used with boolean values (or with using comparison
//	  operators to create boolean values)
/*
      Logical operators are binary operators just like arithmetic operators.
      Arithmetic operators: +, -, *, /, %
      Logical operators: &&, ||, !


&&    This operator means 'and'
||    This operator means 'or'
!     This operator means 'not'

*/

// && returns true only if BOTH values on left and right equate to true

console.log(true && true); //true
console.log(true && false); //false
console.log(true && !false); //true

// || returns true if EITHER of the values on the left or right are true.
console.log(true || false); //true
console.log(false || false); //false
console.log(true || true); //true

console.log(2 > 1 && 4 === 4); // This will evaluate as true since both sides are true.
console.log(true && !(3 > 5)); // This will evaluate to false since the value on the
// right is false.

// Logical operators ask a question:

// Is it the case that both these values on the left and right are true?
true && false; // false

// Is it the case that EITHER of these are true?
true || false; // true
false || false; // false

// Variables are used to save data by assigning values to a variable. Variables must begin with
// a letter and cannot contain special characters.

// DECLARING VARIABLES
// The following line declares a variable without assigning a value.
var firstname1;
// The following line declares a variable and defines it by assigning a value.
var firstname2 = 'Marshawn';
// The following line declares and assigns values to multiple variables
var firstname = 'Mac',
    lastname = 'Dre';
// You can also use variables to assign values to a variable
var username = firstname + ' ' + lastname;

console.log(username); //"Marshawn Lynch"

var username2 = 'Magic Johnson'; // The same variable can also be assigned new values
console.log(username2); //"Magic Johnson"

// ASSIGNING VALUES TO VARIABLES
// Below we'll write code to make it easier to find the area of a square.
var length, width, rectangleArea;

length = 5;
width = 2;
rectangleArea = length * width; // rectangleArea = 5 * 2;

console.log(length);
console.log(width);
console.log('Rectangle Area: ' + rectangleArea);

// We can also change the value of variables we create by assigning
// new values to them.
length = 7;

rectangleArea = length * width; // rectangleArea = 7 * 2;
console.log('New rectangleArea: ' + rectangleArea);

// Create variables concatonating other variables
// Create variables involving a math equation

// Functions allow us to wrap a piece of a program into a statement that we can just call. The
// data within the parenthesis is called an "argument". Here are some examples of functions:

console.log('BIG BALLER BRAND'); // This will simply print whatever is in parentheses

alert('Only big ballers allowed'); // This will alert the user with
// a pop-up

confirm('Are you James Harden?'); // This function will ask the user to confirm something by creating
// a pop-up that they can say 'ok' or 'cancel' to.

prompt('Enter your age.'); // This function creates a pop-up asking the user for input.

// You can assign user feedback to variables.

var username = prompt('Enter your name.');

// Conditional execution allows certain code statements to be executed only under certain conditions.

// Let's say you only want a user to be able to play a game if they're at least age 13
var userAge = prompt('What is your age?');

// By using the keyword 'if', the following code will only be executed if the condition
//within the parentheses evalueates as 'true'.

if (userAge < 13) {
    console.log('You are too young to hoop with us.');
}

// What if you want to perform a different task if the first condition is false?

if (userAge >= 13) {
    console.log('Welcome to the game!');
} else {
    console.log('Your game is too weak!!!!');
}

// We've covered 'if' statements and 'if-else' statements for when you want
// to perform a different task if the condition is false. What if you need
// multiple conditions? You can use if-else-if chains.

// This takes the if-else example a step further. If the
// user leaves the prompt blank, it informs the user that they must input
// a number.

var userAge = prompt('What is your age?');
console.log(userAge);

if (userAge < 13) {
    alert('You are too young to play this game.');
} else if (userAge >= 13) {
    alert('Welcome to the game!');
} else {
    alert('Your input must be a number');
}

/*
- Generate a random number from 0-3
- User to guess that number
- If they guess it, it should tell them they're right
- If they're wrong, the app should tell them they're wrong.
*/

var randomNum = Math.floor(Math.random() * 3);
var userGuess = prompt('We picked a number from 0-10. Can you guess it?');

// We have to use == instead of === because the data type of prompt() is a string, not a number.
if (userGuess == randomNum) {
    console.log('You got it!');
} else {
    console.log('Wrong. The correct answer is ' + randomNum);
}

/*
	Functions are a way to wrap a piece of a program inside a value. Remember
	how variables are for assigning values to? Functions are similar in that
	you can assign a task to a function name.

	Example: We can ask a user for their first name and then create a function
	to greet that user. To use a function that you've created, it must be
	called (or 'invoked').
*/

var fname = prompt('What is your first name');

//Lines 14-16 create a function called greetTheUser
function greetTheUser() {
    alert('Welcome, ' + fname);
}

// Call the function
greetTheUser();

// I'm creating the function called timesTwo with the parameter num
function timesTwo(num) {
    console.log(num * 2);
}

// Here we will invoke the timesTwo function by passing different arguments
timesTwo(5);
timesTwo(10);
timesTwo(0.324545);

// A function can have multiple parameters
function rectangleArea(l, w) {
    return length * width;
}

// Calling the function
rectangleArea(5, 5);

// Functions can be assigned to variables
var rectangle1 = rectangleArea(2, 4);

// Argument vs Parameter

// When you're creating a function, the part between parenthesis is called
// a parameter.  In the below example, num is a parameter.
function timesTwo(num) {
    console.log(num * 2);
}

// However, when you call a function, the data between parenthesis is called
// an argument. In the below example, we are invoking the timesTwo function
// and passing 5 as an argument.
timesTwo(5);

// ASSIGNMENT
// 1. Create a function called triangleArea with two parameters, b and h.
//    Log the area to the console. You'll need to google the equation.

let irvineIsAGiantBagOfPotatoes = prompt('Do i have a punchable face?');
document.body.innerHTML = irvineIsAGiantBagOfPotatoes;