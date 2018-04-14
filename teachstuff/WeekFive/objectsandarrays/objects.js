'use strict';

// Taught by Thomas *** Comments by Farhad

/*
	What is an object in the real world?  A chair, a table, a book. These are objects. In programming, 
	an object is a collection of properties that are tied to a variable. This is similar to how we
	define an object in the real world. What is a table? It's a thing with a flat surface, has one or 
	more legs, and is stable enough that we can place things on it (these are all properties that define 
	a table).
*/

// An object is a data type just like a string, number, boolean, and function.

// The person object has 3 properties
var person = {
	name: 'Marshawn Lynch',
	heightInInches: 71,
	occupation: 'American football running back'
}


// Objects can also have functions attached to them. Functions attached to an object are called methods.
var shelter = {
	type: 'dog',
	location: 'bellevue',
	typeCall: function(){
		return 'the type of shelter is  ' + this.type; // in this.type, "this" refers to the variable shelter
	}
};


// dot notation and bracket notation are used to access properties of objects.
shelter.type = 'high shelter'; // dot notation
shelter['location'] = 'Bellevue'; // bracket notation


// To access an object's method, dot notation must be used. For this reason, developers rarely use bracket notation
// since dot notation allows them to keep their code consistent.
shelter.typeCall()


// We've already worked with other objects with methods attached to them.
console.log()
document.write()