/*  Create an index.js that includes a function that utilizes the modulus operator and && ( open html to see result in alert)*/

function math (){
    return 54 % 5
}
if (math() < 10 && math() > 1) {
    alert(math())
}else {

    alert('the function math was not < 10 && > 1')
};


/*  Create a function that takes in 3 arguments and return a calculation utilizing all three ( open html to see result in alert) */

function myFunction(x,y,z) {
 return x * y + z;
};
alert(myFunction(2,2,2))
//doesnt work?--> document.getElementById('task2').innerHTML = myFunction(4,5,1)


/*  Declare two variables in a function ( open html to see result in alert) */
function adding (){
    var one = 6
    var two = 10
    return one + two
 
};
function displayResult() {
    document.getElementById('task3').innerHTML = adding();
};
//document.getElementById('task3').innerHTML+= "new content"


/*  Create a function using an if/else statement properly ( open html to see result in alert) */
    function statements (a,b){
        
       if (a * b != 8) {
            return alert('the result did not = 8')
        } else{
            return alert('the result is 8')
        }

    };
    alert(statements(8,1))
   
   