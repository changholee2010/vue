var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, resp) {

    fs.readFile('index.html', function (error, data) {
        resp.writeHead(200, {
            'Content-Type': 'text/html'
        })
        resp.end(data)

    })
});

server.on('request', function (code) {
    console.log('request')
})

server.on('connection', function (code) {
    console.log('connection')
})

server.on('close', function (code) {
    console.log('close')
})

server.listen(52273)