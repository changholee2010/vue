var express = require('express')

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(function (req, res) {
    res.writeHead(200, {
        'Content-type': 'text/html'
    });
    res.end('<img src="sample.png" width="300px">');
})

app.listen(52273, function () {
    console.log('Server Running https://...')
})