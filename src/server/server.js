// Server part
let http = require('http');
let url = require('url');

function start(route, handle) {
	function onRequest(req, res) {
		let pathName = url.parse(req.url).pathname;
		let postData = "";
		
		req.setEncoding('utf8');
		
		// Post method_(start)
		if (req.method === 'POST') {
			console.log("method === 'POST'");
		}
		req.addListener('data', (postDataChunk) => {
			postData += postDataChunk;
		});		
		// Post method_(end)
		
		req.addListener('end', () => {
			route(handle, pathName, res, postData);
		});		
	};
	
	http.createServer(onRequest).listen(8080);
}

exports.start = start;