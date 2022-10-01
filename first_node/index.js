var os = require('os')
var fs = require('fs')
// console.log(os.hostname(), os.type(), os.platform(), os.arch(), os.release(), os.uptime(), os.loadavg(), os.totalmem(), os.freemem(), os.cpus(), os.networkInterfaces())
var data = "hello, world";
fs.writeFile('sample.txt', data, 'utf8', function (error) {
    if (error)
        console.log(error)

    console.log('completed.')
})
fs.readFile('text.txt', 'utf8', function (error, data) {
    console.log(data)
});