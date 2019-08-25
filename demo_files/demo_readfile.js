var http = require('http');
var fs = require('fs'); //File system module allows you to work with the file system on the computer
http.createServer(function(req, res) {
    fs.readFile('demofile1.html', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
}).listen(8080);