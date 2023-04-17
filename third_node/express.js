var express = require('express');
var fs = require('fs');

var app = express();

app.use(function (request, response) {
    let run = 3;
    if (run == 1) {

        fs.readFile('express.html', 'utf8', function (error, data) {
            response.writeHead(200, {
                'Content-type': 'text/html'
            })
            response.end(data);
        })
    } else if (run == 2) {
        var output = [];
        for (var i = 0; i < 3; i++) {
            output.push({
                count: i,
                name: 'name - ' + i
            })
        }
        response.send(output);
    } else if (run == 3) {
        response.status(404).send('<h1>ERROR</h1>');
    }
})

app.listen(52273, function () {
    console.log('Server Running http://127.0.0.1:52273');
})