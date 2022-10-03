var express = require('express');
var fs = require('fs');

var app = express();

app.use(function (request, response) {
    var agent = request.header('User-Agent');
    console.log(request.header);
    console.log(agent);
    fs.writeFile("user.txt", agent, "utf8", function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log(agent);
        }
    });
})

app.listen(52273, function () {
    console.log('Server Running http://127.0.0.1:52273')
})