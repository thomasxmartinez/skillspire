var newContactForm = document.getElementById('new-contact-form');
var nameInput = document.getElementById('name-input');
var numberInput = document.getElementById('number-input');
var emailInput = document.getElementById('email-input');
var contactsUl = document.getElementById('contacts-ul');

// Object constructor to create new contact objects on form submission
function Contact(name, number, email) {
    this.name = name;
    this.number = number;
    this.email = email;
}

// event listener
// A "callback function" is a function passed as an argument
// for another function.
newContactForm.addEventListener('submit', function () {

    // Prevent submission default (stop page refresh)
    event.preventDefault();


	/*
		Application Logic:
		- Create object constructor for contacts (outside of the event listener)
		- When user clicks submit:
			- We will create a new contact object
			- We will push that object into the <ul>
	*/

    var newContact = new Contact(nameInput.value, numberInput.value, emailInput.value);

    contactsUl.innerHTML += '<li>' + newContact.name + '  |  ' + newContact.number + '  |  ' + newContact.email + '</li>'

})


