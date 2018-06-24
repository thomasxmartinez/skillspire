// var word = 'h!ello !world!'

// console.log(word)

// function remove(a){
//  var b = a.replace(/!/g,'');
  
// //a.replace(/!/g,'');
// return b
// }

// //remove(word)

// function split (a){
//   let arr = a.split("");
//   let noexcel = []
//   for(i = 0; i < a.length; i++)
  
//   if (arr[i] !=='!'){
//     noexcel.push(arr[i])
//   }
//   return noexcel.join("")
// }

// split(word)
var houseBtn = document.getElementById('house-btn');
var gotBtn = document.getElementById('got-btn');
var clearBtn = document.getElementById('clear-btn');
var imgDiv = document.getElementById('img-div');

clearBtn.addEventListener('click', function() {
  imgDiv.innerHTML = '';
});

houseBtn.addEventListener('click', function() {
  imgDiv.innerHTML = ('<img class="image" src="http://www.activityshelter.com/wp-content/uploads/2016/04/picture-of-number-1-gold.jpg">');
});

gotBtn.addEventListener('click', function() {
  imgDiv.innerHTML = ('<img class="image" src="http://cliparts.co/cliparts/rTL/ozK/rTLozKG9c.jpg">');
});
