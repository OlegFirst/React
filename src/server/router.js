// Router. Path recognizing

function route(handle, pathName, response, postData) {	
	if (typeof handle[pathName] === 'function') {
		handle[pathName](response, postData);
	} else {
		console.log("No request handler found for " + pathName);
		response.writeHead(404, {"Content-type": "text/plain"});
		response.write("404 Not found");
		response.end;
	}
}

exports.route = route;