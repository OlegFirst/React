// Server part
let server = require('./server');
let router = require('./router');
let requestHandlers = require('./requestHandlers');

// Router events
let handle = {};
handle['/'] = requestHandlers.home;
handle['/products'] = requestHandlers.products;
handle['/products/sweets'] = requestHandlers.productsSweets;
handle['/products/vegetables'] = requestHandlers.productsVegetables;
handle['/products/fruits'] = requestHandlers.productsFruits;
handle['/write'] = requestHandlers.write;

server.start(router.route, handle);