
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
