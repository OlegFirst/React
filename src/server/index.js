// Server part

let http = require('http');
let mysql = require('mysql');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('Greetings');
}).listen(8080);