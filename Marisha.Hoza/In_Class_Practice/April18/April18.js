// create a function that adds a string and a random number

//corect:

function addNumber(words) {
    return words + (Math.floor(Math.random()*100)) ;
}

addNumber('cake');




// create a building object that has floors and type, using bracket notation and dot notation


let factory = {}
//dot notation
factory.firstFloor = 'receptionists';
factory.secondFloor = 'chocolate vats';
factory.thirdFloor = 'packaging center';
factory.fourthFloor = 'slide back to the warehouse'
factory.basement = 'vault of untold secrets';
//bracket notation
factory['warehouse'] = '78% capacity'
factory['type'] = 'chocolate';
factory['specialty'] = 'raspberry truffles'

console.log(factory);

//can add objects as more objects



// arrays !!!!!!!!!!


var groceryList = ['chicken broth','zucchini','bok choy','onions'];

console.log(groceryList);

groceryList.push('coconut milk');
groceryList.unshift('green curry paste');

console.log(groceryList);

groceryList.shift();
groceryList.pop();

console.log(groceryList);




// loops and making your code shorter and better

/*
alert(1);
alert(2);
alert(3);
alert(4);
alert(5);
*/

//lots of manual labor

var count = 0;

while (count <= 5) {
  alert(count);
  count = count + 1;
}

//much better because you can expand it as needed and it's more succinct
