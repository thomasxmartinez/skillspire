/*//class for and while loops

nums=0

while (nums<=10){
  console.log (nums)
  nums++
}

// (count; condition; increase/decrease)
for (var i =0; i < 5; i++){

}

// Use contact list as example.
// Here's how it was done with a while loop:
//                 0        1        2          3
var contacts = ['Ahmed', 'Abdi', 'Mohamed', 'Keyse'];
var count = 0;
while (count < contacts.length) {
    document.write('<p>' + contacts[count] + '</p>');
    count++;
}

// Use contact list as example.
// Here's how it was done with a while loop:
//				   0		1 		 2 			3
var contacts = ['Ahmed', 'Abdi', 'Mohamed', 'Keyse'];


// Here it is with a for loop.
for (var i = 0; i < contacts.length; i++) {
    document.write('<p>' + contacts[i] + '</p>');
}*/


var contacts = ['#', '##', '###', '####','#####'];

for (var i = 0; i < contacts.length; i++) {
    document.write('<p>' + contacts[i] + '</p>');
}

var txt = ""; 
for(var i = 0; i < 5; i++) { 
    document.write('<p>' + (txt += '#') + '</p>'); 
}