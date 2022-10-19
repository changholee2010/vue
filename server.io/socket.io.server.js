var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

var server = http.createServer(function (request, respose) {
    fs.readFile('HTMLPage.html', function (error, data) {
        respose.writeHead(200, {
            'Content-type': 'text/html'
        });
        respose.end(data);
    })
}).listen(52273, function () {
    console.log('Server running at http://127.0.0.1:52273')
});

var io = socketio.listen(server);
io.sockets.on('connection', function (socket) {
    socket.on('rint', function (data) {
        console.log('Client Send Data:', data);
        socket.emit('smart', data);
    })

})