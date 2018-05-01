
'use strict';

var guessForm = document.getElementById('guess-form');

// Event listner to perform task when user clicks 'submit' button
guessForm.addEventListener('submit', function() {
	
	var userChoice = document.getElementById('userInput');
	var outputP = document.getElementById('output-p');
	// Line 11 generates a random number from 0-11 whenever the user clicks the submit button.
	var computerChoice = Math.floor(Math.random()*11);

	// Prevents page from reloading.
	event.preventDefault();
	
	// We can't use '===' to compare because userChoice.value is a string while computerChoice is a number.
	// Therefore, we have to avoid comparing the data type.
	if (userChoice.value == computerChoice) {
		outputP.innerHTML = 'That\'s right! The correct answer was ' + computerChoice + '!';
	} else {
		outputP.innerHTML = 'Nope. The correct answer was ' + computerChoice + '.';
	}

	

});

var guessForm = document.getElementById('guess-form2');

// Event listner to perform task when user clicks 'submit' button
guessForm.addEventListener('submit', function() {
	
	var userChoice = document.getElementById('userInput2');
	var outputP = document.getElementById('output-p2');
	
	var answer = "sun"

	event.preventDefault();

	if (userChoice.value == answer) {
		outputP.innerHTML = 'That\'s right! The correct answer was ' + answer + '!';
	} else {
		outputP.innerHTML = 'Nope. The correct answer was ' + answer+ '.';
	}


})

var guessForm = document.getElementById('guess-form3');

// Event listner to perform task when user clicks 'submit' button
guessForm.addEventListener('submit', function() {
	
	var userChoice = document.getElementById('userInput3');
	var outputP = document.getElementById('output-p3');
	
	var answer = "Storm" && "storm"

	event.preventDefault();

	if (userChoice.value == answer) {
		outputP.innerHTML = 'That\'s right! The correct answer was ' + answer + '!';
	} else {
		outputP.innerHTML = 'Nope. The correct answer was ' + answer+ '.';
	}


})

