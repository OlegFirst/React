const mysql = require('mysql');
// const express = require('express');
// const bodyParser = require('body-parser');

// var app = express();
// app.use(bodyParser.json());

var con = mysql.createConnection({
	host: 'localhost',
	user: 'user',
	password: '1234',
	database: 'ishop',
	port: '3306'
});

// host: 'localhost',
// database: 'ishop'
// socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
//cloud_instance_private_ip
// port: '/var/run/mysqld/mysqld.sock'

//mysql.createConnection();

con.connect((err) => {
	if (!err)
		console.log('DB connection succeseed');
	else
		console.log('Data base connection error \n Error: ' + JSON.stringify(err, undefined, 2));
});
con.end();

// const create = "CREATE DATABASE proba";
// const createTable = "CREATE TABLE one (name VARCHAR(10), surname VARCHAR(30))";
// const insertInto = "INSERT INTO one (name, surname) VALUES ('Oleg', 'Good')";
// const selectFrom = "SELECT * FROM goods";

// con.query(selectFrom, (err, result, fields) => {
	// if (!err)
		// console.log(result);
	// else
		// console.log('Data base connection error \n Error: ' + JSON.stringify(err, undefined, 2));
// });

// con.end();

// app.get('/', (res, req) => {
	// console.log('ok');
	// con.query(selectFrom, (err, res, fields) => {
		// if (!err)
			// console.log('error' + JSON.stringify(err, undefined, 2));
		// else
			// console.log(res);
	// });
// });

// app.listen(3000, () => {
	// console.log('Express server is running at port 3000');
// });






// con.connect(function(err) {
	// if (err) throw err;
	// var sql = "CREATE TABLE one (name VARCHAR(30))";
	// con.query(sql, function(err, res) {
		// if (err) throw err;
		// console.log('created');
	// });
// });