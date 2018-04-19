let coolCat = prompt('Who is the coolest cat of them all?');

let why = prompt('Why is that cat so cool?');

let anythingElse = prompt('Anything else?');

let combine = coolCat + ' because ' + why + ' and ' + anythingElse;

document.getElementById('response').innerHTML = combine;

var FirstName = prompt('place your name');
alert('Welcome' + ' ' + FirstName);

var myFunction = function() {
    var func1 = prompt('firstname');

    if (func1 === 'only text' || func1 === 'only text') {
        alert(' no number please');
    } else {
        alert(' danger');
    }
};
myFunction();

alert("TrailBlazers");
let firstRounds = prompt("enter 1st round");
let secondRounds = prompt("enter 2nd round");
let x = firstRounds + secondRounds;
alert(x);