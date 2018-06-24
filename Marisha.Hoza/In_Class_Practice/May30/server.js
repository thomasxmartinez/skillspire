var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

// "request", "response" can be anything. commonly "req", "res"
// app.use('/', function(request, response){
//     response.send('Hey team hey!!')
// });


// this line looks for a file named index.html . NEEDS TO BE NAMED index.html
app.use(express.static(__dirname + '/app/'));


// this will return for anything that is not found eg localhost:3000/whatever
app.use(function (req, res, next) {
    res.status(404).sendFile(__dirname + '/app/sneeze.html')
});


app.listen(port, function() {
    console.log('Party at port ' + port)
});


