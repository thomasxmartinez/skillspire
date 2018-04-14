// An important aspect of functions is that any variables created inside a
// function are only accessible within that function. This is what we call 
// 'local' scope.


//Global scope -- variable can be accessed anywhere
var user1 = 'Earl';

function greet() {
	console.log('Hello ' + user1);
};

// I can log user1 and I'll see 'Earl' returned because this variable has
// global scope.
console.log(user1);

// Local scope -- variable can only be accessed from inside the function it was
// created in.  In the below code, user2 is only accessible inside the 
// greetGates function
function greetGates() {
	var user2 = 'Gates';
	console.log('Hello ' + user2);
}

// The below statement will throw an error saying user2 is not defined. Not
// because user2 wasn't defined, but because it was created inside a 
// function and its scope is local to that function.
console.log(user2);


// Scope applies to both variables AND functions. A function nested inside
// another function is not accessible outside of it.
function sayHi() {

	console.log('Hi');

	function sayBye() {
		console.log('SayBye');
	}
}

// Invoking the sayHi() function will work.
sayHi();

// Invoking sayBye() will fail because it's local to the sayHi() function.
sayBye();