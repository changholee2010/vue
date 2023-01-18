var fs = require('fs')

var data = 'Hello, World .. !';

fs.writeFile('file.txt', data, 'utf8', function (error) {
    console.log('async')
})

fs.writeFileSync('file.txt', data, 'utf8');
console.log('sync')