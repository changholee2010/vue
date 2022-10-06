var http = require('http');
var fs = require('fs');
var ejs = require('ejs');
var i = 0;

http.createServer(function (request, response) {
    fs.readFile('ejsPage.ejs', 'utf8', function (error, data) {
        var paramVal = {
            name: 'Rinta12345',
            desc: 'Hello World'
        }
        var parsingPage = ejs.render(data, paramVal);
        response.writeHead(200, {
            'Content-type': 'text/html'
        });
        response.end(parsingPage);
    })
}).listen(52273, function () {
    console.log('Server Started http://127.0.0.1:52273')
});