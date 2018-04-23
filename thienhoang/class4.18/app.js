
//class 4.11
alert('hello world');
let firstApples = prompt("enter 1st amount");
let secondApples = prompt("enter  2nd amount");
let sumOfApples = parseInt(firstApples) + parseInt(secondApples);
alert(sumOfApples);

let projector = {}

projector.brand = "viewsonic";
projector.lens = "clear";
projector.cost = 5.99;
projector.available = true


//class 4.18 .

/*let sample = 'cats';
function rando(word){
    return word + Math.random();
}

rando(sample);

let building = {};
building.floor = 100;
building[type] = 'warehouse';*/



/*list remove and add first and last position
let list = ['item 1', 'item 2', 'item 3', 'item 4'];


list.push('apples');


list.unshift('banana');


list.shift();
list.pop();
*/


//loops

let count = 0

while (count <= 1) {
  alert(count)
  count  ++
}

let list = ['red', 'blue', 'yellow', 'brown', 'green'];

while (count < list.length) {
    document.write('<p>' + list[count] + '<p>' );
    count ++
}

/* 4/21 

function even_or_odd (num){
  let remainder = num % 2;
  
  if (remainder === 0 ){
    return ('this is an even number')
  }else {
    return ('this is an odd number')
  }}
  
  
even_or_odd (23)




let str = "washington";
//str = str.slice(1, -1);
//str = str.slice(1);
str = str.slice(1, -1);
console.log(str);

function char (str){
 let btr = str.slice(1, str.length -1);
  return (btr)
}
char("washington is the best")




function mathTest (operator, value1, value2){
  
  if (operator === '+'){
    return (value2 + value1);
  }else if (operator === '/'){
    return(value1 / value2);
  }else if (operator === '*'){
    return (value1 * value2);
  }else if (operator === '-'){
    return(value1 - value2);
  }else {
    return (" your operator was not one of the following +, - , *, /");
  }
}

mathTest('+', 10,10);

*/
