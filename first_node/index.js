var os = require('os')
var fs = require('fs')
var axios = require('axios')
var url = require('url')

// console.log(os.hostname(), os.type(), os.platform(), os.arch(), os.release(), os.uptime(), os.loadavg(), os.totalmem(), os.freemem(), os.cpus(), os.networkInterfaces())
var data = "hello, world";
var ary = []

fs.readFileSync('MOCK_DATA.json', 'utf8', function (error, args) {
    console.log('a')
    // console.log(data)
    var result = JSON.parse(args);
    result.forEach(item => {
        // console.log(item)
        // data += item.first_name;
        ary.push(item.first_name)
    })

});

fs.writeFileSync('sample4.txt', ary, 'utf8', function (error) {
    console.log('b')
    if (error)
        console.log(error)

    console.log('completed.')
})