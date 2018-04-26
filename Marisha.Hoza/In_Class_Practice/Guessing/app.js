'use strict';

// -------------------------QUESTION 1-------------------------
var guessForm = document.getElementById('guess-my-name');

// Event listner to perform task when user clicks 'submit' button
guessForm.addEventListener('submit', function() {
	
	var userChoice = document.getElementById('user-guess-input1');
	var outputP = document.getElementById('output-name');
	// Line 11 generates a random number from 0-11 whenever the user clicks the submit button.
	var computerChoice = 'marisha';

	// Prevents page from reloading.
	event.preventDefault();
	
	// We can't use '===' to compare because userChoice.value is a string while computerChoice is a number.
	// Therefore, we have to avoid comparing the data type.
	if (userChoice.value == computerChoice) {
		outputP.innerHTML = "That's right! The correct answer was " + computerChoice + "!" + "<br>" + "<img src=./test1.png></img>";
	} else {
		outputP.innerHTML = 'Nope. The correct answer was ' + computerChoice + '.';
    }
    
	userChoice.value = '';

}) 



// -------------------------QUESTION 2-------------------------

var guessForm = document.getElementById('guess-tall-animal');

// Event listner to perform task when user clicks 'submit' button
guessForm.addEventListener('submit', function() {
	
	var userChoice = document.getElementById('user-guess-input2');
	var outputP = document.getElementById('output-tall-animal');
	// Line 11 generates a random number from 0-11 whenever the user clicks the submit button.
    var computerChoice1 = 'giraffe';
    var computerChoice2 = 'elephant';

	// Prevents page from reloading.
	event.preventDefault();
	
	// We can't use '===' to compare because userChoice.value is a string while computerChoice is a number.
	// Therefore, we have to avoid comparing the data type.
	if (userChoice.value == computerChoice1 || userChoice.value == computerChoice2) {
		outputP.innerHTML = 'That\'s right!';
	} else {
		outputP.innerHTML = 'Nope. Try again';
	}

	userChoice.value = '';

}) 




// -------------------------QUESTION 3-------------------------

var guessForm = document.getElementById("guess-cat-name");

// Event listner to perform task when user clicks 'submit' button
guessForm.addEventListener("submit", function() {
  var userChoice = document.getElementById("user-guess-input3");
  var outputP = document.getElementById("output-cat-name");
  // Line 11 generates a random number from 0-11 whenever the user clicks the submit button.
  var computerChoice = "sadie";

  // Prevents page from reloading.
  event.preventDefault();

  // We can't use '===' to compare because userChoice.value is a string while computerChoice is a number.
  // Therefore, we have to avoid comparing the data type.
  if (
    userChoice.value == computerChoice
  ) {
    outputP.innerHTML = "Wow, you remembered?!";
  } else {
    outputP.innerHTML = "Nope. The correct answer was " + computerChoice + ".";
  }

  userChoice.value = "";
}); 