


var newCupcakeForm = document.getElementById("new-cupcake-form");
var nameInput = document.getElementById("name-input");
var fillingInput = document.getElementById("filling-input");
var cakeInput = document.getElementById("cake-input");
var frostingInput = document.getElementById("frosting-input");
var cupcakesUl = document.getElementById("cupcakes-ul");


function cupCake(name, filling, cake, frosting) {
    this.name = name;
    this.filling = filling;
    this.cake = cake;
    this.frosting = frosting;
}


newCupcakeForm.addEventListener("submit",function() {
    event.preventDefault();

    var newCupcake = new cupCake(nameInput.value, fillingInput.value, cakeInput.value, frostingInput.value);
    console.log(newCupcake);

    cupcakesUl.innerHTML += '<li><strong>' + newCupcake.name + ':  </strong>' + newCupcake.filling + '  |  ' + newCupcake.cake + '  |  ' + newCupcake.frosting + '</li><br>'

    nameInput.value = "";
    fillingInput.value = ""; 
    cakeInput.value = ""; 
    frostingInput.value = "";
})
