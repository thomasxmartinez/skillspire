var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.use('/', function(a, b){
    b.send('hey team dsfsdhey!!!!')
})
app.use(express.static(__dirname + '/app/'));

app.use( function(req, res, next){
    res.status(404).sendfile(__dirname + '/app/index.htmll')
})

app.listen(port, function(){
    console.log('party at port' + port)
})