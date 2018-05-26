var houseBtn = document.getElementById("house-btn");
var gotBtn = document.getElementById("got-btn");
var clearBtn = document.getElementById("clear-btn");
var imgDiv = document.getElementById("img-div");

clearBtn.addEventListener("click", function() {
  imgDiv.innerHTML = "";
});

houseBtn.addEventListener("click", function() {
  imgDiv.innerHTML = '<img class="displaypic" src="./house.jpg">';
});

gotBtn.addEventListener("click", function() {
  imgDiv.innerHTML = '<img class="displaypic" src="./goh.jpg">';
});