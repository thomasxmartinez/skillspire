// Prompt: Create an index.js that includes a function that utilizes the modulus operator and &&

function remain(nums, nums2) {
  if (isNaN(nums) && isNaN(nums2))
    return 'please enter two numbers so we can find the remainder';
  else if (isNaN(nums) || isNaN(nums2))
    return 'thought you could pull a fast one? NOPE! Two numbers please!';
  else
    return (
      'the remainder of ' + nums + ' divided by ' + nums2 + ' is ' + (nums % nums2)
    );
}

remain(9,2);




// Prompt: Create a function that takes in 3 arguments and return a calculation utilizing all three

// let's find out which is larger, the product of a and b, or c!
function calc(a,b,c){
  let product = (a*b);
  if (product > c) return product + ' > ' + c;
  else if (product == c) return product + ' = ' + c;
  else if (product < c) return product +' < '+ c; 
  else return 'There seems to be a problem. Did you enter three numbers?';
}

calc (4,27,88);





// Prompt: Declare two variables in a function 
//Declare two variables (var) in a function that compares the length of two strings

function test(one, two) {
  let first = one.length;
  let second = two.length;
  if (first > second) return one + " is longer than " + two;
  else if (first === second) return one + " is the same length as " + two;
  else if (first < second) return one + " is shorter than " + two;
  else return "You managed to break this. Try again.";
}

test("cake", "frosting");


//Create a function using an if/else statement properly



function howFar(planet){
  let mercury = 36; //distance is in million miles
  let venus = 67.2;
  let earth = 93;
  let mars = 141.6;
  let jupiter = 483.6;
  let saturn = 886.7;
  let uranus = 1784.0;
  let neptune = 2794.4;
  let pluto = 3674.5;
  let lightSpeed = 671; //million miles per hour
  let speedPerMinute = lightSpeed/60;
  let string1 = 'Traveling at light speed while ' + planet + ' is at its closest orbit, it would take you about '
  let string2 = ' minutes to get there from Earth';
  let string3 = ' hours to get there from Earth';
  
  if (planet === 'Mercury' || planet === 'mercury') return string1 + Math.round(Math.abs(mercury-earth)/speedPerMinute) + string2;
  else if (planet === 'Venus' || planet === 'venus') return string1 + Math.round(Math.abs(venus-earth)/speedPerMinute) + string2;
  else if (planet === 'Earth' || planet === 'earth') return 'We are already on Earth, silly!'
  else if (planet === 'Mars' || planet === 'mars') return string1 + Math.round(Math.abs(mars-earth)/speedPerMinute) + string2;
  else if (planet === 'Jupiter' || planet === 'jupiter') return string1 + Math.round(Math.abs(jupiter-earth)/speedPerMinute) + string2;
  else if (planet === 'Saturn' || planet === 'saturn') return string1 + Math.round(Math.abs(saturn-earth)/lightSpeed) + string3;
  else if (planet === 'Uranus' || planet === 'uranus') return string1 + Math.round(Math.abs(uranus-earth)/lightSpeed) + string3;
  else if (planet === 'Neptune' || planet === 'neptune') return string1 + Math.round(Math.abs(neptune-earth)/lightSpeed) + string3;
  else if (planet === 'Pluto' || planet === 'pluto') return string1 + Math.round(Math.abs(pluto-earth)/lightSpeed) + string3;
 
  else return 'please pick a planet in our solar system'
  
}

howFar('jupiter');