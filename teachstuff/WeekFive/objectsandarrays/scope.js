'use strict';

// Taught by Thomas***

// Scope tells us where a variable is accessible from.

// There are two kinds of scope - global scope and local scope.

// Variables declared inside of a function are local to that function. Meaning, they cannot be
// accessed outside of that function.
var printCar = function(){
	// The variable car is local to the printCar function
	var car = 'honda';
	console.log(car);
}

var printMotorcycle = function(){
	// The variable motorcycle is local to the printMotorcycle function
	var motorcycle = 'kawasaki';
	console.log(motorcycle);
	console.log(car); // Because car is local to printCar(), this line will fail.

}

// The variable spaceship has global scope because it was not created within a function.
// Therefore, spaceship has global scope.
var spaceship = 'the enterprise';
var printSpaceship = function() {
	console.log(spaceship);
} 

// Here we will invoke each function
printCar();
printMotorcycle();
spaceship();