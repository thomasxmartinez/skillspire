//alert(apples)
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
function correct(a) {
	document.getElementById(a).innerHTML = 'Thats correct!';
}
function wrong(a) {
	document.getElementById(a).innerHTML = 'You are wrong! Guess again';
}
function correctImage(a) {
	document.getElementById(a).innerHTML = '<img id="correctImage" src="http://tse2.mm.bing.net/th?id=OIP.pWUdf2D5GJxYj3DlaFTraAHaHa&pid=Api">';
}
function wrongImage(a) {
	document.getElementById(a).innerHTML = '<img id="wrongImage"src="http://techgeek.com.au/wp-content/uploads/2010/11/thumbs-down.jpg" >';
}

//second question
var secondForm = document.getElementById('userInputYellow');

secondForm.addEventListener('click', function () {

var computerChoice = 'green';
var userChoice = secondForm;

event.preventDefault();

	if (userChoice.value == computerChoice) {
		correct('secondFormOutput')
	} else {
		wrong('secondFormOutput')
	}
});

//3rd question
var secondForm = document.getElementById('userInputGreen2');
var thirdForm = document.getElementById('userInputYellow2');

secondForm.addEventListener('click', function () {

var computerChoice = 'yellow';
var userChoice = secondForm;

event.preventDefault();

	if (userChoice.value == computerChoice) {
		correct('thirdFormOutput')
	} else {
		wrong('thirdFormOutput')
	}
});
thirdForm.addEventListener('click', function () {

	var computerChoice = 'yellow';
	var userChoice = thirdForm;
	
	event.preventDefault();
	
		if (userChoice.value == computerChoice) {
			correct('thirdFormOutput')
		} else {
			wrong('thirdFormOutput')
		}
	});

//4th question
var fourthForm = document.getElementById('userInputYellow4');
var fourthForm2 = document.getElementById('userInputGreen4');
var fourthForm3 = document.getElementById('userInputRed4');

function john(a) {
var computerChoice = 'yellow';
var userChoice = a;
event.preventDefault();
if (userChoice.value == computerChoice) {
correct('fourthFormOutput')
} else {
wrong('fourthFormOutput')
}}

fourthForm.addEventListener('click', function (){
john(fourthForm);
});
fourthForm2.addEventListener('click', function (){
john(fourthForm2);
	});
fourthForm3.addEventListener('click', function (){
john(fourthForm3);
});
//5th question with hover not click
var guessForm2 = document.getElementById('guess-form2');

guessForm2.addEventListener('mouseover', function () {
	
	var userChoice = document.getElementById('userInput');
	var outputP = document.getElementById('fifthFormOutput');
	
	var computerChoice = Math.floor(Math.random()*11);

	event.preventDefault();
	

	if (userChoice.value == computerChoice) {
		correct('fifthFormOutput');
	} else {
		wrong('fifthFormOutput')
	}});
//6th question
var secondForm6 = document.getElementById('userInputYellow6');

secondForm6.addEventListener('mouseover', function () {

var computerChoice = 'yellow';
var userChoice = secondForm6;

event.preventDefault();

	if (userChoice.value == computerChoice) {
		correct('sixFormOutput')
	} else {
		wrong('sixFormOutput')
	}
});


//7th question
var secondForm2 = document.getElementById('userInputGreen7');
var thirdForm2 = document.getElementById('userInputYellow7');

secondForm2.addEventListener('mouseover', function () {

var computerChoice = 'yellow';
var userChoice = secondForm2;

event.preventDefault();

	if (userChoice.value == computerChoice) {
		correct('sevenFormOutput')
	} else {
		wrong('sevenFormOutput')
	}
});
thirdForm2.addEventListener('mouseover', function () {

	var computerChoice = 'yellow';
	var userChoice = thirdForm2;
	
	event.preventDefault();
	
		if (userChoice.value == computerChoice) {
			correct('sevenFormOutput')
		} else {
			wrong('sevenFormOutput')
		}
	});


//8th question
var eightForm = document.getElementById('userInputYellow8');
var eightForm2 = document.getElementById('userInputGreen8');
var eightForm3 = document.getElementById('userInputRed8');

function john1(a) {
	event.preventDefault();
var computerChoice = 'yellow';
var userChoice = a;

if (userChoice.value == computerChoice) {
correct('eightFormOutput')
} else {
wrong('eightFormOutput')
}}

eightForm.addEventListener('mouseover', function (){
john1(eightForm);
});
eightForm2.addEventListener('mouseover', function (){
john1(eightForm2);
	});
eightForm3.addEventListener('mouseover', function (){
john1(eightForm3);
});

// 9th question
var nineForm = document.getElementById('userInputYellow9');
var nineForm2 = document.getElementById('userInputGreen9');
var nineForm3 = document.getElementById('userInputRed9');

function johns(a) {
	event.preventDefault();
	var computerChoice = 'yellow';
	var userChoice = a;

	if (userChoice.value == computerChoice) {
	correctImage('nineFormOutput')
	} else {
	wrongImage('nineFormOutput')
	}}

nineForm.addEventListener('click', function (){
johns(nineForm);
});
nineForm2.addEventListener('click', function (){
johns(nineForm2);
	});
	nineForm3.addEventListener('click', function (){
johns(nineForm3);
});

//10 question

var tenForm = document.getElementById('userInputYellow10');
var tenForm2 = document.getElementById('userInputGreen10');
var tenForm3 = document.getElementById('userInputRed10');

function johnss(a) {
	event.preventDefault();
var computerChoice = 'yellow';
var userChoice = a;
event.preventDefault();
if (userChoice.value == computerChoice) {
correctImage('tenFormOutput')
} else {
wrongImage('tenFormOutput')
}}

tenForm.addEventListener('mouseover', function (){
johnss(tenForm);
});
tenForm2.addEventListener('mouseover', function (){
johnss(tenForm2);
	});
tenForm3.addEventListener('mouseover', function (){
johnss(tenForm3);
});