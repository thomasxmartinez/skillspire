var express = require('express');
//declare an app from express
var app = express();
var port = process.env.PORT || 3000;

//--set up basic routing for index route
// app.use('/', function(requrest, response) {
//   response.send('Hey Skillspire hey');
// });

app.use(express.static(__dirname + '/app/')); //when doing .use, I am going to use middleware here

app.use(function(request, response, next) {
  response.status(404).sendFile(__dirname + '/app/fourOhfour.html');
});

//start server on port etc etc
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

//node is a platform built on chromes v8 engine, someone ripped it out of the browser so people can use that anywhere
//created by ryan dahl
//maintained by node.js foundation
//http://www.tothenew.com/blog/how-are-10-global-companies-using-node-js-in-production/
//node comes with a built in module for creating network based apps
//just a library not a framework
//Features of express include middleware, declarative (exact, pattern, glob), response options, DB agnostic
//routing is order based, support for all HTTP verbs
