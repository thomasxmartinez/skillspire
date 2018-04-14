'use strict';

	// We are using the <form> element's id attribute to assign the element to the variable nameForm
	var nameForm = document.getElementById('name-form');

 	// Event listner to perform task when user clicks 'submit' button
 	// Notice how ALL of the logic exists inside the button click
 	nameForm.addEventListener('submit', function() {


 		var fnameInput = document.getElementById('fname-input');
		var lnameInput = document.getElementById('lname-input');
		var outputP = document.getElementById('output-p');

	 	event.preventDefault(); // Prevents page from refreshing

	 	// IF either input box is empty, tell user to input their first/last name. (If you don't remember || view day07 lesson 27-logical-operators)
	 	// ELSE greet the user
		if (fnameInput.value === '' || lnameInput.value === '') {
			outputP.innerHTML = 'You need to enter your first name and last name.';
		} else {

	 		//Access each html element to ouput my data
 			outputP.innerHTML = 'Welcome, ' + fnameInput.value + ' ' + lnameInput.value + '.';

	 		//Clear the textboxes
	 		fnameInput.value = '';
	 		lnameInput.value = '';
		}
 	})