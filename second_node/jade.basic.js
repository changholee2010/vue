var http = require('http');
var fs = require('fs');
var jade = require('jade');

http.createServer(function (request, response) {

        fs.readFile('jadePage.jade', 'utf8', function (error, data) {
            
            var paramVal = {
                name: 'Rinta12345',
                desc: 'Hello World'
            }
            var fn = jade.compile(data);
            response.writeHead(200, {
                'Content-type': 'text/html'
            })
            response.end(fn(paramVal));
        })
    })
    .listen(52273, function () {
        console.log('Server Running http://127.0.0.1:52273')
    });