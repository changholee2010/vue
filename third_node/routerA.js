var express = require('express')
var router = express.Router();

router.get('/index', function (request, response) {
    response.send('<h1>A Index Page</h1>');
})
router.get('/home', function (request, response) {
    response.send('<h1>A Home Page</h1>');
})

exports.router = router;