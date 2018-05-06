
let image = '<img class="display-pic" src="./images/';
let endImage = '"/>';

let puppyPictures = ["pup1.jpg","pup2.jpg","pup3.jpg","pup4.png","pup5.jpg","pup6.jpg","pup7.jpg","pup8.jpg","pup9.jpg"];
let kittyPictures = ["kit1.jpg","kit2.jpg","kit3.jpg","kit4.png","kit5.jpg","kit6.jpg","kit7.jpeg","kit8.jpg","kit9.jpg"];
let displayPictures = [];


let pictureGrid = document.getElementById("picture-grid");
let radios = document.getElementById("picture-form").elements["animal"];



// generate a random number from 0-8
let randomNumber = Math.floor(Math.random() * 9);



function bothPictures() {
  let bothArray = [];
  for (var i = 0; i < randomNumber; i++) {
    bothArray.push(puppyPictures[i]);
  }
  for (var j = 0; bothArray.length < 9; j++) {
    bothArray.push(kittyPictures[j]);
  }
  return bothArray;
}







// event listener to desplay pics when a radio button is clicked 
for (var i = 0; i < radios.length; i++) {
  radios[i].onclick = function() {

    event.preventDefault();

    let typeOfPics = this.value;

    
    function pictureArray () {
        if (typeOfPics == "puppies"){
            displayPictures = puppyPictures;
        } else if (typeOfPics == "kittens"){
            displayPictures = kittyPictures;
        } else if (typeOfPics == "both") {
            displayPictures = bothPictures();
        } else {
            return Error;
        }
    }
    pictureArray()

    function createRows(array) {
      let writeThis = [];
      for (var i = 0; i < array.length; i += 3) {
        writeThis.push("<tr>");
        for (var j = i; j < i + 3; j++) {
          writeThis.push("<td>" + image + array[j] + endImage + "</td>");
        }
        writeThis.push("</tr>");
      }
      return writeThis;
    }
    



    pictureGrid.innerHTML =
        createRows(displayPictures);

  }
}