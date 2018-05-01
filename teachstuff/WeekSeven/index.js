/*
What is scope?
The idea of scope is very simple: scope tells us where a piece of data is accessible.
There are two kinds of scope: global and local.  

Global scope:
A variable with "global scope" can be accessed from anywhere in our program.  

Local scope:
A variable created inside of a function has "local scope." It can only be accessed from 
inside the function it was created in.
*/


// This variable has global scope because it wasn't created inside a function.
var globalVariable = 'I\'m global.';

// Variables that are global can be accessed from anywhere. For example, we're 
function createLocalScope() {
    console.log('I can access this: ' + globalVariable);
}

// Variables created within a function can only be accessed within that function
function createLocalScope() {
    var localVariable = 'I\'m local to this function';
    console.log(localVariable);
}

// Because localVariable was created inside createLocalScope(), it can't be accessed
// outside of that function.  The below code will fail.
console.log(localVariable);


// Scope affects not just variables, but functions as well. A function nested within
// another function can only be accessed inside of that function.

function globalFunction() {

    function localFunction() {
        console.log('This function is local and can only be accessed within the function it was created in.');
    }

    // Calling localFunction() inside of globalFunction() will work
    localFunction();
}


// This won't work
localFunction();



/*
IN CLASS ASSIGNMENT

Steps:
1. Create a global variable. 
2. Create a global function that logs that variable.
3. Create a function nested inside the previous function.
4. Inside the nested function, create a variable called local;
   the value of local should be the string 'local var.'
5. Log local var to the console.
*/


// console.log() is a method used to log data to the console. This is mainly used for testing purposes.
function logToConsole() {
    console.log('hi');
}

// return is used in functions to pass a value back to where the call was made.
function rectangleArea(l, w) {
    return l * w;
}

// Think of "return" as asking the function to hold onto a value. It gives us the flexibility to do
// whatever we want with it. For examplle..

// we can alert it:
alert('Rectancle1:' + rectangleArea(3, 2));

// we can also add the data to our website:
document.write('Rectangle area: ' + rectangleArea(3, 3));



// "return" can be used to hold any data. Here we'll use it to hold a string.
function returnName() {
    return 'Farhad';
}

// now we'll alert it
alert(returnName());

// Create a global variable called fname that prompts the user for a name.
// Create a function that takes a name as a parameter and returns the name.
// Invoke the function by alerting the name passed in the prompt.


/*
IN CLASS ASSIGNMENT:

Step 1: Create a global variable that prompts the user for their name.

Step 2: Create a function that takes a name as a parameter and returns 
		'Hello, ' + [variable name]

Step 3: Invoke the function within an alert and pass that name as an 
		argument.
*/


// Answer:
var fname = prompt('What\'s your name?');
someFunc(fname); // <-- put this in an alert

function greet(name) {
    return 'Hello, ' + name;
}

alert(greet(fname));

// Create a function that takes a boolean as a parameter and returns
// 'Yup' if the boolean is true, and 'Nope' if the boolean is false.

// Answer:

function responseToBoolean(bool) {
    if (bool === true) {
        return 'Yup';
    } else {
        return 'Nope';
    }
}

var tyrion = {
    name: 'Tyrion Lanister',
    number: '333-3312',
    email: 'idrinkandiknowthings@got.com'
}

var jon = {
    name: 'Jon Snow',
    number: '444-4444',
    email: 'iknownothing@got.com'
}

var cirsi = {
    name: 'Cirsi Lanister',
    number: '666-6666',
    email: 'heretolovemychildrenandblowshitup@got.com'
}



// Object constructors (aka constructor functions) are used to quickly 
// create multiple objects with similar properties.

function Contact(name, number, email) {
    this.name = name;
    this.number = number;
    this.email = email;
}

var tyrionLanister = new Contact('Tyrion Lanister', '333-3312', 'idrinkandiknowthings@got.com');
var jonsnow = new Contact('Jon Snow', '444-4444', 'iknownothing@got.com');
var cirsi = new Contact('Jamie Lanister', '666-6666', 'helpineedahand@got.com');

// Create a function that takes a string as an
// argument and returns the string.

// Create a function called greet that has 2
// parameters: fname & lname.
// Return "Hello, " plus the full name.








// SOLUTIONS
function returnStr(str) {
    return str;
}

returnStr('some string');


function greet(fname, lname) {
    return 'Hello, ' + fname + ' ' + lname;
}

greet('Abdi', 'Ali');








var newContactForm = document.getElementById('new-contact-form');
var nameInput = document.getElementById('name-input');
var numberInput = document.getElementById('number-input');
var emailInput = document.getElementById('email-input');
var contactsUl = document.getElementById('contacts-ul');

// Object constructor to create new contact objects on form submission
function Contact(name, number, email) {
    this.name = name;
    this.number = number;
    this.email = email;
}

// event listener
// A "callback function" is a function passed as an argument
// for another function.
newContactForm.addEventListener('submit', function () {

    // Prevent submission default (stop page refresh)
    event.preventDefault();


	/*
		Application Logic:
		- Create object constructor for contacts (outside of the event listener)
		- When user clicks submit:
			- We will create a new contact object
			- We will push that object into the <ul>
	*/

    var newContact = new Contact(nameInput.value, numberInput.value, emailInput.value);
    console.log(newContact);

    contactsUl.innerHTML += '<li>' + newContact.name + '  |  ' + newContact.number + '  |  ' + newContact.email + '</li>'

})