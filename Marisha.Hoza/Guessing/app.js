"use strict";

// -------------------------QUESTION 1-------------------------
var guessForm = document.getElementById("guess-faster1");

// Event listner to perform task when user clicks 'submit' button
guessForm.addEventListener("submit", function() {
  var userChoice = document.getElementById("user-guess-input1");
  var outputP = document.getElementById("output-faster1");
  var correctAnswer1 = "hippo";
  var correctAnswer2 = "Hippo";

  // Prevents page from reloading.
  event.preventDefault();

  if (
    userChoice.value == correctAnswer1 ||
    userChoice.value == correctAnswer2
  ) {
    outputP.innerHTML = 'That\'s right! Hippos can run up to 30mph, so unless your name is Usain Bolt, you\'re probably out of luck! <br> <image class=\"responseimage\" src="./guessingpics/hippochase.jpg"/>';
  } else {
    outputP.innerHTML = "Remind me not to take you on a safari... <br> <img class=\"responseimage\" src=\"./guessingpics/gasphippo.jpg\"/>";
  }

  userChoice.value = "";
});

// -------------------------QUESTION 1-------------------------
var guessForm = document.getElementById("guess-faster2");

// Event listner to perform task when user clicks 'submit' button
guessForm.addEventListener("submit", function() {
  var userChoice = document.getElementById("user-guess-input2");
  var outputP = document.getElementById("output-faster2");
  var correctAnswer1 = "ostrich";
  var correctAnswer2 = "Ostrich";

  event.preventDefault();

  if (
    userChoice.value == correctAnswer1 ||
    userChoice.value == correctAnswer2
  ) {
    outputP.innerHTML = 
    "That is the terrifying truth. Ostriches can run in bursts up to 60mph vs the fastest horse on record at 44mph. <br> <img class=\"responseimage\" src=\"./guessingpics/runningostrich.jpg\"/>";
  } else {
    outputP.innerHTML = "Not quite. <br> <img class=\"responseimage\" src=\"./guessingpics/upsidedownhorse.jpg\"/>";
  }

  userChoice.value = "";
});

// -------------------------QUESTION 3-------------------------

var guessForm = document.getElementById("guess-kangaroo");

guessForm.addEventListener("submit", function() {
  var userChoice = document.getElementById("user-guess-input3");
  var outputP = document.getElementById("output-kangaroo");
  var correctAnswer1 = "true";
  var correctAnswer2 = "t";
  var correctAnswer3 = "True";

  event.preventDefault();

  if (
    userChoice.value == correctAnswer1 ||
    userChoice.value == correctAnswer2 ||
    userChoice.value == correctAnswer3
  ) {
    outputP.innerHTML = "Yes! Look how cute! <br> <img class=\"responseimage\" src=\"./guessingpics/treekangaroo.jpg\"/>";
  } else {
    outputP.innerHTML = "Jokes on you!! Enter true or t to see a pic. <br> <img class=\"responseimage\" src=\"./guessingpics/lolwrong.jpeg\"/>";
  }

  userChoice.value = "";
});

// -------------------------QUESTION 4-------------------------

var guessForm = document.getElementById("guess-huge");

guessForm.addEventListener("submit", function() {
  var userChoice = document.getElementById("user-guess-input4");
  var outputP = document.getElementById("output-huge");
  var correctAnswer1 = "no";
  var correctAnswer2 = "No";
  var correctAnswer3 = "n";

  event.preventDefault();

  if (
    userChoice.value == correctAnswer1 ||
    userChoice.value == correctAnswer2 ||
    userChoice.value == correctAnswer3
  ) {
    outputP.innerHTML =
      "Correct! At leat not that we know of. Blue whales are bigger than even the largest dinosaurs and sea creatures of Earth's history. <br> <img class=\"responseimage\" src=\"./guessingpics/bluewhalecompare2.jpg\"/>";
  } else {
    outputP.innerHTML =
      "Nice thought, but check out this picture and answer again. <br> <img class=\"responseimage\" src=\"./guessingpics/bluewhalecompare.jpg\"/>";
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
  var correctAnswer3 = "a couple dozen";

  event.preventDefault();

  if (
    (userChoice.value >= correctAnswer1 &&
      userChoice.value <= correctAnswer2) ||
    userChoice.value == correctAnswer3
  ) {
    outputP.innerHTML =
      "Good guess! Platy typically have from 24-48 roe. How do I know this? Because I def have a hugely prego fish right now and I'm trying to prepare for the swam that's about to happen in the tank... <br> <img class=\"responseimage\" src=\"./guessingpics/fatplaty.jpg\"/>";
  } else if (userChoice.value < correctAnswer1) {
    outputP.innerHTML = "Nope, it's usually more than that! <br> <img class=\"responseimage\" src=\"./guessingpics/manyfish.jpg\"/>";
  } else if (userChoice.value > correctAnswer2) {
    outputP.innerHTML = "Actually, less than that. <br> <img class=\"responseimage\" src=\"./guessingpics/manyfish.jpg\"/>";
  } else {
    outputP.innerHTML =
      "Try again my friend. There's a range of correct answers so throw a number in. <br> <img class=\"responseimage\" src=\"./guessingpics/manyfish.jpg\"/>";
  }

  userChoice.value = "";
});

// -------------------------QUESTION 6-------------------------

var guessForm = document.getElementById("guess-dolphin");

guessForm.addEventListener("submit", function() {
  var userChoice = document.getElementById("user-guess-input6");
  var outputP = document.getElementById("output-dolphin");
  var correctAnswer1 = "yes";
  var correctAnswer2 = "Yes";
  var correctAnswer3 = "y";

  event.preventDefault();

  if (
    userChoice.value == correctAnswer1 ||
    userChoice.value == correctAnswer2 ||
    userChoice.value == correctAnswer3
  ) {
    outputP.innerHTML =
      "Yes! Wild dolphins actually have a complicated enough form of language that they call each other by name. <br> <img class=\"responseimage\" src=\"./guessingpics/manydolphins.jpeg\"/>";
  } else {
    outputP.innerHTML = "Gotcha!! Think again! <br> <img class=\"responseimage\" src=\"./guessingpics/onedolphin.jpg\"/>";
  }

  userChoice.value = "";
});

// -------------------------QUESTION 7-------------------------

var guessForm = document.getElementById("guess-vote");

guessForm.addEventListener("submit", function() {
  var userChoice = document.getElementById("user-guess-input7");
  var outputP = document.getElementById("output-vote");
  var correctAnswer1 = "deer";
  var correctAnswer2 = "buffalo";
  var correctAnswer3 = "baboons";
  var correctAnswer4 = "pigeons";
  var correctAnswer5 = "bison";

  event.preventDefault();

  if (
    userChoice.value == correctAnswer1 ||
    userChoice.value == correctAnswer2 ||
    userChoice.value == correctAnswer3 ||
    userChoice.value == correctAnswer4 ||
    userChoice.value == correctAnswer5
  ) {
    outputP.innerHTML =
      "Deer, buffalo, baboons, and pigeons, to name a few, actually make group decisions by voting. My favorite is buffalo because only the females get to vote :D <br> Don't believe me? Look it up! <br> <img class=\"responseimage\" src=\"./guessingpics/baboonvoting.jpg\"/>";
  } else {
    outputP.innerHTML = "Nope. Here's a picture for a clue. <br> <img class=\"responseimage\" src=\"./guessingpics/buffalo.jpeg\"/>";
  }

  userChoice.value = "";
});

// -------------------------QUESTION 8-------------------------

var guessForm = document.getElementById("guess-ants");

guessForm.addEventListener("submit", function() {
  var userChoice = document.getElementById("user-guess-input8");
  var outputP = document.getElementById("output-ants");
  var correctAnswer1 = "Europe";
  var correctAnswer2 = "europe";
  var correctAnswer3 = "pretty please";

  event.preventDefault();

  if (
    userChoice.value == correctAnswer1 ||
    userChoice.value == correctAnswer2 ||
    userChoice.value == correctAnswer3
  ) {
    outputP.innerHTML =
      "Europe is correct. The largest ant supercolony on record spans about 3,700 miles, from Italy to the Spanish Atlantic coast. <br> If you\'re curious, you can read a bit more <a href=\"http://www.pnas.org/content/99/9/6075\">here</a>. <br> <img class=\"responseimage\" src=\"./guessingpics/antcolony.png\"/>";
  } else {
    outputP.innerHTML = "Nope. Try again or say pretty please. <br> <img class=\"responseimage\" src=\"./guessingpics/nope.jpg\"/>";
  }

  userChoice.value = "";
});

// -------------------------QUESTION 9-------------------------

var guessForm = document.getElementById("guess-stink");

guessForm.addEventListener("submit", function() {
  var userChoice = document.getElementById("user-guess-input9");
  var outputP = document.getElementById("output-stink");
  var correctAnswer1 = "false";
  var correctAnswer2 = "f";

  event.preventDefault();

  if (
    userChoice.value == correctAnswer1 ||
    userChoice.value == correctAnswer2
  ) {
    outputP.innerHTML =
      "Good job! It is true that you can smell a skunk from about a mile away, but two miles is definitely too far. <br> <img class=\"responseimage\" src=\"./guessingpics/skunk2.jpeg\"/>";
  } else {
    outputP.innerHTML = "Your wrong answer makes me sad. <br> <img class=\"responseimage\" src=\"./guessingpics/sadskunk.jpg\"/>";
  }

  userChoice.value = "";
});

// -------------------------QUESTION 10-------------------------

var guessForm = document.getElementById("guess-polar");

guessForm.addEventListener("submit", function() {
  var userChoice = document.getElementById("user-guess-input10");
  var outputP = document.getElementById("output-polar");
  var correctAnswer1 = "false";
  var correctAnswer2 = "f";

  event.preventDefault();

  if (
    userChoice.value == correctAnswer1 ||
    userChoice.value == correctAnswer2
  ) {
    outputP.innerHTML =
      "Look at you all quick witted! Even though polar bears average a body temperature of 98.6F, they give of almost no detectable heat, so infrared cameras do not work on them. That's some serious fur! <br> <img class=\"responseimage\" src=\"./guessingpics/polarbearjokes.png\"/>";
  } else {
    outputP.innerHTML =
      "Good luck EVER finding a polar bear in a snow storm, especially with infrared! <br> <img class=\"responseimage\" src=\"./guessingpics/polarbearsnow.jpg\"/>";
  }

  userChoice.value = "";
});
