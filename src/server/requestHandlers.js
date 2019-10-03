data = require('./data');

// Home
function home(response) {
	response.writeHead(200, { 
		"Content-Type": "text/plain",
		"Content-Type": "text/html; charset=utf-8"
	});
	response.write("Home");
	response.end();
}

// Get products list
function products(response) {
	new Promise((resolve, reject) => {
		resolve();		
	})
	.then((res) => {
		response.writeHead(200, { 
			"Content-Type": "text/plain",
			"Content-Type": "text/html; charset=utf-8"
		});	
		response.write(JSON.stringify(data, undefined, 2));		
		response.end();
	})
	.catch((err) => {
		console.log('Request handler error');
		response.end();
	})
}

// Get sweets list from products
function productsSweets(response) {	
	new Promise((resolve, reject) => {
		resolve();
	})
	.then((res) => {
		response.writeHead(200, { 
			"Content-Type": "text/plain",
			"Content-Type": "text/html; charset=utf-8"
		});	
		response.write(JSON.stringify(data.SWEETS, undefined, 2));
		response.end("That`s a body");
	})
	.catch((err) => {
		console.log('Request handler error');
		response.end("That`s a body");
	})
}

// Get vegetables list from products
function productsVegetables(response) {
	new Promise((resolve, reject) => {
		resolve();
	})
	.then((res) => {
		console.log(2)
		response.writeHead(200, { 
			"Content-Type": "text/plain",
			"Content-Type": "text/html; charset=utf-8"
		});	
		response.write(JSON.stringify(data.VEGETABLES, undefined, 2));
		response.end();
	})
	.catch((err) => {
		console.log('Request handler error');
		response.end();
	})
}

// Get fruits list from products
function productsFruits(response) {	
	new Promise((resolve, reject) => {
		resolve();
	})
	.then((res) => {
		response.writeHead(200, { 
			"Content-Type": "text/plain",
			"Content-Type": "text/html; charset=utf-8"
		});	
		response.write(JSON.stringify(data.FRUITS, undefined, 2));
		response.end();
	})
	.catch((err) => {
		console.log('Request handler error');
		response.end();
	})
}

// POST
function write(response, postData) {
	console.log(3, postData);
	response.writeHead(200, { 
		"Content-Type": "text/plain",
		"Content-Type": "text/html; charset=utf-8"
	});	
	response.write(JSON.stringify(postData));
	response.end();
}

// Gets
exports.home = home;
exports.products = products;
exports.productsSweets = productsSweets;
exports.productsVegetables = productsVegetables;
exports.productsFruits = productsFruits;
// Post
exports.write = write;