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
    database: 'node_data'
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
                console.log(error);
            } else {
                res.send(ejs.render(data, {
                    data: results
                }))
            }
        });
    })
})
app.get('/delete/:id', function (req, res) {
    client.query('delete from products where id=?', [req.params.id], function () {
        res.redirect('/')
    })
})
app.get('/insert', function (req, res) {
    fs.readFile('insert.html', 'utf8', function (error, data) {
        res.send(data);
    })
})
app.post('/insert', function (req, res) {
    var body = req.body;

    client.query('insert into products (name, modelnumber, series) values(?,?,?)', [body.name, body.modelnumber, body.series], function () {
        res.redirect('/');
    })
})
app.get('/edit/:id', function (req, res) {
    fs.readFile('edit.html', 'utf8', function (error, data) {
        client.query('select * from products where id = ?', [req.params.id], function (error, result) {
            console.log(result);
            res.send(ejs.render(data, {
                data: result[0]
            }))
        })
    })
})
app.post('/edit/:id', function (req, res) {
    var body = req.body;

    client.query('update products set name=?, modelnumber=?, series=? where id=?', [body.name, body.modelnumber, body.series, req.params.id],
        function () {
            res.redirect('/')
        })
})