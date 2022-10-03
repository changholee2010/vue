var express = require('express')
var morgan = require('morgan')

var app = express();

app.use(morgan('combined'));
app.use(function (request, response) {
    response.send('<h1>express basic</h1>');
})

app.listen(52273, function () {
    console.log('Server Running http://...')
})