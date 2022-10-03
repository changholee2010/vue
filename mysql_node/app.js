var fs = require('fs');
var ejs = require('ejs');
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

var client = mysql.createConnection({
    user: 'mysql',
    password: 'mysql',
    host: '192.168.0.14',
    port: '3306',
    database: 'sample_db'
})

var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}))

app.listen(52273, function () {
    console.log('Server Running http://...')
})

app.get('/', function (req, res) {
    fs.readFile('list.html', 'utf8', function (error, data) {
        client.query('select * from products', function (error, results) {
            if (error) {
                console.log('sql error');
            } else {
                res.send(ejs.render(data, {
                    data: results
                }))
            }
        });
    })
})
app.get('/delete/:id', function (req, res) {})
app.get('/insert', function (req, res) {})
app.post('/insert', function (req, res) {})
app.get('/edit/:id', function (req, res) {})
app.post('/edit/:id', function (req, res) {})