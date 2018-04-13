'use strict';

var guessForm = document.getElementById('guess-form');

// Event listner to perform task when user clicks 'submit' button
guessForm.addEventListener('submit', function() {
	
	var userChoice = document.getElementById('user-guess-input');
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

	userChoice.value = '';

})