var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.use('/', function(a, b){
    b.send('hey team dsfsdhey!!!!')
})

app.listen(port, function(){
    console.log('party at port' + port)
})