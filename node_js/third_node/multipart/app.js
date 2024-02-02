var fs = require('fs');
var express = require('express');
var multipart = require('connect-multiparty');
const {
    response
} = require('express');

var app = express();

app.use(multipart({
    uploadDir: __dirname + "/upload"
}));

app.use('/', function (req, res) {
    fs.readFile('index.html', function (err, data) {
        res.send(data.toString());
    })
})

app.post('/', function (req, res) {
    var comment = req.body.comment;
    var imageFile = req.files.image;

    if (imageFile) {
        var name = imageFile.name;
        var path = imageFile.path;
        var type = imageFile.type;

        if (type.indexOf('image' != -1)) {
            var outputPath = __dirname + '/upload' + Date.now() + '_' + name;
            fs.rename(path, outputPath, function (err) {
                res.redirect('/')
            })
        } else {
            fs.unlink(path, function (err) {
                res.sendStatus(400);
            })
        }
    } else {
        res.sendStatus(404);
    }
})

app.listen(52273, function () {
    console.log('Server Running http://...')
})