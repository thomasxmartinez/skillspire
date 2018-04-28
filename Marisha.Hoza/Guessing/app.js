'use strict';

// -------------------------QUESTION 1-------------------------
var guessForm = document.getElementById('guess-faster1');

// Event listner to perform task when user clicks 'submit' button
guessForm.addEventListener('submit', function() {
	
	var userChoice = document.getElementById('user-guess-input1');
	var outputP = document.getElementById('output-faster1');
	var correctAnswer1 = 'hippo';
	var correctAnswer2 = 'Hippo';

	// Prevents page from reloading.
	event.preventDefault();
	
	if (userChoice.value == correctAnswer1 || userChoice.value == correctAnswer2) {
		outputP.innerHTML = "That's right! Hippos can run up to 30mph, so unless your name is Usain Bolt, you're probably out of luck!";
	} else {
		outputP.innerHTML = 'Remind me not to take you on a safari...';
    }
    
	userChoice.value = '';

}) 



// -------------------------QUESTION 2-------------------------

var guessForm = document.getElementById('guess-faster2');

guessForm.addEventListener('submit', function() {
	
	var userChoice = document.getElementById('user-guess-input2');
	var outputP = document.getElementById('output-faster2');
    var correctAnswer1 = 'ostrich';
    var correctAnswer2 = 'Ostrich';

	event.preventDefault();
	
	if (userChoice.value == computerChoice1 || userChoice.value == computerChoice2) {
		outputP.innerHTML = 'That is the terrifying truth. Ostriches can run in bursts up to 60mph vs the fastest horse on record at 44mph.';
	} else {
		outputP.innerHTML = 'Not quite.';
	}

	userChoice.value = '';

}) 



// -------------------------QUESTION 3-------------------------

var guessForm = document.getElementById("guess-kangaroo");

guessForm.addEventListener("submit", function() {
  var userChoice = document.getElementById("user-guess-input3");
  var outputP = document.getElementById("output-kangaroo");
	var correctAnswer1 = 'true';
	var correctAnswer2 = 't';
	var correctAnswer3 = 'true';

  event.preventDefault();

  if ( userChoice.value == correctAnswer1 || userChoice.value == correctAnswer2 || userChoice.value == correctAnswer3) {
    outputP.innerHTML = "Yes! Look how cute!";
  } else {
    outputP.innerHTML = "Jokes on you!! Enter true or t to see a pic.";
  }

  userChoice.value = "";
}); 



// -------------------------QUESTION 4-------------------------

var guessForm = document.getElementById("guess-huge");

guessForm.addEventListener("submit", function() {
  var userChoice = document.getElementById("user-guess-input4");
  var outputP = document.getElementById("output-huge");
	var correctAnswer1 = 'no';
	var correctAnswer2 = 'No';
	var correctAnswer3 = 'n';

  event.preventDefault();

  if ( userChoice.value == correctAnswer1 || userChoice.value == correctAnswer2 || userChoice.value == correctAnswer3) {
    outputP.innerHTML = "Correct! At leat not that we know of. Blue whales are bigger than even the largest dinosaurs and sea creatures of Earth's history.";
  } else {
    outputP.innerHTML = "Nice thought, but check out this picture and answer again.";
  }

  userChoice.value = "";
}); 





// -------------------------QUESTION 5-------------------------

var guessForm = document.getElementById("guess-platy");

guessForm.addEventListener("submit", function() {
  var userChoice = document.getElementById("user-guess-input5");
  var outputP = document.getElementById("output-platy");
	var correctAnswer1 = 24;
	var correctAnswer2 = 48;
	var correctAnswer3 = 'a couple dozen';

  event.preventDefault();

  if ( (userChoice.value >= correctAnswer1 && userChoice.value <= correctAnswer2) || userChoice.value == correctAnswer3) {
    outputP.innerHTML = "Good guess! Platy typically have from 24-48 roe. How do I know this? Because I def have a hugely prego fish right now and I'm trying to prepare for the swam that's about to happen in the tank...";
	} else if (userChoice.value < correctAnswer1) {
    outputP.innerHTML = "Nope, it's usually more than that!";
  } else if (userChoice.value > correctAnswer2) {
    outputP.innerHTML = "Actually, less than that.";
  } else {
		outputP.innerHTML = "Try again my friend. There's a range of correct answers so throw a number in.";
	}

  userChoice.value = "";
}); 





// -------------------------QUESTION 6-------------------------

var guessForm = document.getElementById("guess-dolphin");

guessForm.addEventListener("submit", function() {
  var userChoice = document.getElementById("user-guess-input6");
  var outputP = document.getElementById("output-dolphin");
	var correctAnswer1 = 'yes';
	var correctAnswer2 = 'Yes';
	var correctAnswer3 = 'y';

  event.preventDefault();

  if ( userChoice.value == correctAnswer1 || userChoice.value == correctAnswer2 || userChoice.value == correctAnswer3) {
    outputP.innerHTML = "Yes! Wild dolphins actually have a complicated enough form of language that they call each other by name.";
  } else {
    outputP.innerHTML = "Dolphins aint no dummies, thank you very much!";
  }

  userChoice.value = "";
}); 




// -------------------------QUESTION 7-------------------------

var guessForm = document.getElementById("guess-vote");

guessForm.addEventListener("submit", function() {
  var userChoice = document.getElementById("user-guess-input7");
  var outputP = document.getElementById("output-vote");
	var correctAnswer1 = 'deer';
	var correctAnswer2 = 'buffalo';
	var correctAnswer3 = 'baboons';
	var correctAnswer4 = 'pigeons';

  event.preventDefault();

  if ( userChoice.value == correctAnswer1 || userChoice.value == correctAnswer2 || userChoice.value == correctAnswer3 || userChoice.value == correctAnswer4) {
    outputP.innerHTML = "Deer, buffalo, baboons, and pigeons, to name a few, actually make group decisions by voting. My favorite is buffalo because only the females get to vote :D <br> Don't believe me? Look it up!";
  } else {
    outputP.innerHTML = "Nope. Here's a picture for a clue.";
  }

  userChoice.value = "";
}); 




// -------------------------QUESTION 8-------------------------

var guessForm = document.getElementById("guess-ants");

guessForm.addEventListener("submit", function() {
  var userChoice = document.getElementById("user-guess-input8");
  var outputP = document.getElementById("output-ants");
	var correctAnswer1 = 'Europe';
	var correctAnswer2 = 'europe';
	var correctAnswer3 = 'please just tell me';

  event.preventDefault();

  if ( userChoice.value == correctAnswer1 || userChoice.value == correctAnswer2 || userChoice.value == correctAnswer3) {
    outputP.innerHTML = "Europe is correct. The largest ant supercolony on record ranges about 3,700 miles from Italy to the Spanish Atlantic coast, though there are some pretty large colonies on the California coast as well. <br> If you're curious, you can read a bit more <a href=\"http://www.pnas.org/content/99/9/6075\">here</a>.";
  } else {
    outputP.innerHTML = "Nope. Here's a picture for a clue.";
  }

  userChoice.value = "";
}); 




// -------------------------QUESTION 9-------------------------

var guessForm = document.getElementById("guess-stink");

guessForm.addEventListener("submit", function() {
  var userChoice = document.getElementById("user-guess-input9");
  var outputP = document.getElementById("output-stink");
	var correctAnswer1 = 'false';
	var correctAnswer2 = 'f';

  event.preventDefault();

  if ( userChoice.value == correctAnswer1 || userChoice.value == correctAnswer2) {
    outputP.innerHTML = "Good job! It is true that you can smell a skunk from about a mile away, but two miles is definitely too far.";
  } else {
    outputP.innerHTML = "I tricked you!";
  }

  userChoice.value = "";
}); 



// -------------------------QUESTION 10-------------------------

var guessForm = document.getElementById("guess-polar");

guessForm.addEventListener("submit", function() {
  var userChoice = document.getElementById("user-guess-input10");
  var outputP = document.getElementById("output-polar");
	var correctAnswer1 = 'false';
	var correctAnswer2 = 'f';

  event.preventDefault();

  if ( userChoice.value == correctAnswer1 || userChoice.value == correctAnswer2) {
    outputP.innerHTML = "Look at you all quick witted! Even though polar bears average a body temperature of 98.6F, they give of almost no detectable heat, so infrared cameras do not work on them. That's some serious fur!";
  } else {
    outputP.innerHTML = "Good luck EVER finding a polar bear in a snow storm, especially with infrared!";
  }

  userChoice.value = "";
}); 