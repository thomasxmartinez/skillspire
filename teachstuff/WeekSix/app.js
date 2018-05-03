'use strict';

// We covered some ARITHMETIC OPERATORS on day 6, but we didn't cover all of them.
3 + 4;
5 - 3;
4 * 43;
6 / 3;


/*

Here are some additional arithmetic operators:

++
--

*/

// Let's say I have a number that I want to increment. Here's one way to do it:
var num = 5;
num = 6;

// What if I don't know the value assigned to num but want to increment? Or if I'm iterating through a loop?
// ++ used to increment
num = num + 1;
num++;



// -- used to decrement
var num2 = 5;
num = num - 1;
num--;




// ASSIGNMENT OPERATORS
/*

=     -assigns the value of the data on the right to the variable on the left
+=
-=

*/

// I have a salary of 90,000 and received 
// a bonus of 500
var salary = 90000;
var bonus = 500;

salary = salary + bonus;  // salary = 90000 + 500
salary += bonus;  // this is a more succinct way of writing the previous line



// Let's say I'm a waiter who makes $800 every two weeks. I just broke a dish. That gets taken out of my paycheck.
var waiterSalary = 800;
var dishPrice = 10;

waiterSalary -= dishPrice;
// waiterSalary = waiterSalary - dishPrice
// waiterSalary =   800 - 10

// What if I knocked over a stack of 5 dishes!
waiterSalary -= dishPrice * 5;


// quick review of while loops
// create while loop that logs 0-10

var num = 0;

while (num <= 10) {
    console.log(num);
    num++;
}


// A do-while loop works similar to a while loop.
// Difference:
// While loop checks a condition and then runs task.
// Do-while loop runs task first and then checks 
// the condition.

// syntax
/*
do {
	//some task
} while (condition);
*/


// Below we will use a do-while loop to log numbers 0 to 10 just so you can see the
// difference between a while loop and a do-while loop.
var num = 0;

do {
    console.log(num);
    num++
} while (num <= 10);


// Example of a use case for do-while loops: We'll prompt a user to input a username.
// As long as the user doesn't type anything, we will continue to prompt him.

do {
    var username = prompt('Choose a username');
} while (username === '');


// 1 - The purpose of a loop is to perform a trask
//     multiple times.
// 2 - Each type of loop works differently
//	   2a - While loop checks a condition and then
//		    performs a task if the condition is true
//	   2b - Do-while loop performs the task and then
//			checks the condition.
// 3 - Loops are often used to iterate through arrays


// while
var num1 = 0;
while (num1 <= 10) {
    console.log(num1);
    num1++;
}

// do-while
var num2 = 0;
do {
    console.log(num2);
    num2++;
} while (num2 <= 10);




// Here is the syntax for a for loop. Index is the count. As long as condition is true, the loop will run.
/*

	for (count; condition; increment) {
		// some task
	}

*/

// Let's use a for loop to log numbers 0-10 just as we did with the previous loops. Notice how it's shorter.
for (var i = 0; i <= 10; i++) {
    console.log(i);
}


// Use contact list as example.
// Here's how it was done with a while loop:
//				   0		1 		 2 			3
var contacts = ['Ahmed', 'Abdi', 'Mohamed', 'Keyse'];

var count = 0;
while (count < contacts.length) {
    document.write('<p>' + contacts[count] + '</p>');
    count++;
}


// Here it is with a for loop.
for (var i = 0; i < contacts.length; i++) {
    document.write('<p>' + contacts[i] + '</p>');
}



// A common interview question will be to write the following using a for loop:

/*

#
##
###
####
#####
######

*/

// Function Practice



// FUNCTIONS WITHOUT PARAMETERS

// create a function that greets Frank Sinatra with an alert. Then invoke the function.
function greetSinger() {
    alert('Hello, Frank Sinatra');
}



// create a function that logs number 5 to the console. Then invoke the function.
function log5() {
    console.log(5);
}

// create a function that prompts the user to enter their age. Then invoke the function.
function checkUserAge() {
    var userAge = prompt('How old are you?');
}

// declare a function that prompts the user to enter their age AND tells them
// to go away if they're under 18. Then invoke the function.
function checkUserAge2() {
    var userAge = prompt('How old are you?');

    if (userAge < 18) {
        console.log('gtfo');
    }
}

// declare a function that prompts the user to enter their age. If the user is
// under 18 tell them to go away. Otherwise let the user enter the site.
function checkUserAge3() {
    var userAge = prompt('How old are you?');

    if (userAge < 18) {
        console.log('gtfo');
    } else {
        'Welcome.'
    }
}





// FUNCTIONS WITH PARAMETERS

// declare a function that takes a name as a parameter and greets that person
function greet(user) {
    console.log('Hello, ' + user);
}

// create a function that returns the area of a square by taking the size of one side as a parameter
function sqrArea(length) {
    return length * length;
}

// declare a function that takes a number as a parameter and returns that number multiplied by 5
function times5(num) {
    return num * 5;
}


// declare a function called logUpTo that takes a paramater. The function should log numbers 0 to whatever number is passed.
// you'll need a for loop for this.
function logUpTo(num) {
    for (var i = 0; i <= num; i++) {
        console.log(i);
    }
}


// FUNCTIONS WITH MULTIPLE PARAMETERS

// create a function that returns the area of a rectangle and takes the length and width as parameters
function rectArea(l, w) {
    return l * w;
}

// create a function that takes a username and password as parameters. If the user is your name AND the password
// is spongebobsquarepants then let the user in.
function logIn(username, password) {
    if (username === 'Boba Fett' && password === 'spongebobsquarepants') {
        console.log('Welcome, Boba Fett.');
    }
}

// create a function that takes a username and password as parameters. If the user is your name AND the password
// is spongebobsquarepants then let the user in.

'use strict';

/*
	What is an object in the real world?  A chair, a table, a book. These are objects. In programming, 
	an object is a collection of properties that are tied to a variable. This is similar to how we
	define an object in the real world. What is a table? It's a thing with a flat surface, has one or 
	more legs, and is stable enough that we can place things on it (these are all properties that define 
	a table). Objects also have functionality that's tied to them.
*/

// An object is a data type just like a string, number, boolean, and function.

// The marshawn object has 3 properties
var marshawn = {
    name: 'Marshawn Lynch',
    heightInInches: 71,
    occupation: 'American football running back',
    location: 'Seattle',
    // speak is a "method", which is a function attached to an object.
    // (this is different from a function -- functions are not attached to objects)
    speak: function () {
        console.log('On the field, there\'s no reason why I can\'t run through you.');
    },
    // changeLocation is a "method", which is a function attached to an object.
    // changeLocation has a "parameter" called newLocation which is a placeholder for the argument that's
    // passed when the method is invoked.
    changeLocation: function (newLocation) {
        this.location = newLocation;
    }
}


var bruce = {
    name: 'Bruce Wayne',
    heightInInches: 74,
    occupation: 'CEO of Wayne Enterprise',
    location: 'Wayne Manor, Gotham City',
    speak: function () {
        console.log('Because I\'m Batman!');
    }
}

var clark = {
    name: 'Clark Kent',
    heightInInches: 73,
    occupation: 'Reporter',
    location: 'Metropolis',
    speak: function () {
        console.log('The \'Amazing\' can only be created by facing fear, risk, and failure during the process.')
    }
}




// dot notation and bracket notation are used to access properties of objects.
console.log(marshawn.name); // dot notation
console.log(marshawn['occupation']); // bracket notation


// To invoke an object's method, dot notation must be used. For this reason, developers rarely use bracket notation
// in general since dot notation allows them to keep their code consistent.
marshawn.newLocation('San Francisco');
bruce.speak();


// We've already worked with other objects with methods attached to them.
console.log('hi');
document.write('sup');


// Whiteboard the following problems:

// Create a for loop that logs numbers 1-10.

// Create a function that logs 'Hi'.

// Create a function that logs numbers 1-10 using a while loop.

// Create a function that takes an array and logs each value in that array.


// I have an array of numbers. Log the sum of those numbers.




/*** SOLUTIONS ***/

// Create a for loop that logs numbers 1-10.
for (var i = 0; i <= 10; i++) {
    console.log(i);
}


// Create a function that logs 'Hi'. Invoke the function.
function greet() {
    console.log('Hi');
}

greet(); // Invoking the function



// Create a function that logs numbers 1-10. Invoke the function.
function logToTen() {
    // We're just taking the for loop from the first problem and placing it inside a function.
    for (var i = 0; i <= 10; i++) {
        console.log(i);
    }
}

logToTen(); // Invoking the function



// Create a function that takes an array as a parameter and logs each value in that array.

// Let's create 3 different arrays. The function should work for all of them.
var nums = [1, 5, 2, 9, 20, 7];
var teachers = ['Farhad', 'Thomas', ' Alyssa'];
var misedArray = ['this', 'is', 'a', 'mixed', 'array', 5, false];

// The (arr) parameter serves as a placeholder for any data we pass. We're naming this "arr" short for
// array since we will always be passing an array to this function.
function logArrayValues(arr) {

    // in the condition we specify arr.length so that this works for arrays of any length.
    for (var i = 0; i <= arr.length; i++) {
        // i is incremented with each iteration of this loop. So this will log the corresponding value
        // in the array.
        console.log(arr[i]);
    }

}