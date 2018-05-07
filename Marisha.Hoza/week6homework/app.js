
// useful stuff for writing code in to the html document
let image = '<img class="display-pic" src="./images/';
let endImage = '"/>';

// arrays
let puppyPictures = [];
let kittyPictures = [];
let displayPictures = [];

// variables based on the element ID's from my html document
let pictureGrid = document.getElementById("picture-grid");
let radios = document.getElementById("picture-form").elements["animal"];



// ---------------------------------------------------------------
// okay, let's get to work.



// First, populate the puppy and kitty arrays with all 81 photos each
function populateArrays (){
    for (var i=1; i<=81; i++){
        puppyPictures.push ("pup" + i + ".jpg");
        kittyPictures.push ("kit" + i + ".jpg");
    }
}
populateArrays(); 



// the Fisher–Yates Shuffle 
// thiswill help me randomize the photo order in my app
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}




// Okay, lets add an event listener to desplay the pics when a radio button is clicked 
for (var i = 0; i < radios.length; i++) {
  radios[i].onclick = function() {
      
    event.preventDefault(); // don't refresh the page

    let typeOfPics = this.value; // typeOfPics is now the value of the button that was clicked


    // first shuffle the puppy and kitty arrays
    // these need to be inside the event listener in order to re-shuffle when a new button is clicked
    shuffle(puppyPictures);
    shuffle(kittyPictures);


    // generate a random number from 0-80
    // again, inside the listener in order to generate a new number each time
    let randomNumber = Math.floor(Math.random() * 81);


    // if needed, create a new array of the same length, with a random assortment of puppies and kittens
    function bothPictures() {
        let bothArray = [];
        for (var i = 0; i < randomNumber; i++) {
            bothArray.push(puppyPictures[i]);
        }
        for (var j = 0; bothArray.length < 81; j++) {
            bothArray.push(kittyPictures[j]);
        }
        return shuffle(bothArray); // shuffle the new array as you return it
    }
    

    // actually decide which pictues to display based on which radio button was clicked
    function pictureArray () {
        if (typeOfPics == "puppies"){
            displayPictures = puppyPictures;
        } else if (typeOfPics == "kittens"){
            displayPictures = kittyPictures;
        } else if (typeOfPics == "both") {
            displayPictures = bothPictures(); // call the both pictures function to create the randomized array
        } else {
            return Error;
        }
    }
    pictureArray()


    
    // okay, time to make our array of pictures display in the document!


    // first, we need to modify our array in order to make it display in nice rows of 9
    function createRows(array) {
      let writeThis = []; 
      for (var i = 0; i < array.length; i += 9) { // first task only happens every 9 items
        writeThis.push("<tr>"); // add a new table row to our array
        for (var j = i; j < i+9; j++) { // next task happens to all the items
          writeThis.push("<td>" + image + array[j] + endImage + "</td>"); // add a table data tag around each item in the array
        }
        writeThis.push("</tr>"); // end the table row
      }
      return writeThis; // our new array has nearly everything we need
    }
    

    // lets ctually write to our html document
    // all we need to add to our finished array is the table and tbody 

    pictureGrid.innerHTML =
       "<table><tbody>" + createRows(displayPictures); + "</tbody></table>"

  }
}