var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// app.use('/', function(requrest, response) {
//   response.send('Hey Skillspire hey');
// });

app.use(express.static(__dirname + '/app/'));

app.use(function(request, response, next) {
  response.status(404).sendFile(__dirname + '/app/fourOhfour.html');
});

app.listen(port, function() {
  console.log('server available at port ' + port);
});

//creates a file called package.json which makes it easier to keep track of everything and also allows to lock in specific package versions

//Answer the questions ----etc ----etc

// npm install --save express
//express is the most popular framework for node.js
// -save installs the framework locally as a dependency

//touch server.js

//set up server with a get requesst that responds with 'hola skillspire'

//create a directory called app
// create an html file
//refactor the server.js file to "use" the html file instead of a get requesst
//add a 404 error HTML page inside your public dir, add an app.use to the server.js file for hte 404 error page

//walk through mongo installation
