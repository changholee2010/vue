var express = require('express');
var app = express();

app.get('/', function(request, response) {
    var html = '<a href="/a">A</a><a href="/B">B</a>';
    response.send(html)
})
app.get('/a', function(request, response) {
    response.send('<a href="/b">B</a>');
})

app.get('/b', function(request, response) {
    response.send('<a href="/a">A</a>');
})

app.listen(52273, function() {
    console.log('Server Running http://')
})
