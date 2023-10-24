var express = require('express')

var app = express();

var routerA = express.Router();
var routerB = express.Router();

routerA.get('/index', function (request, response) {
    response.send('<h1>Index Page</h1>');
})
routerA.get('/home', function (request, response) {
    response.send('<h1>Home Page</h1>');
})
routerB.get('/index', function (request, response) {
    response.send('<h1>Index Page</h1>');
})
routerB.get('/home', function (request, response) {
    response.send('<h1>Home Page</h1>');
})

app.use('/a', routerA);
app.use('/b', routerB);

app.all('*', function (request, response) {
    response.send('<h1>Not Found</h1>')
});

app.listen(52273, function () {
    console.log('Server Running http://...')
});