var http = require('express');
var url = "mongodb://localhost:27017";

const express = require('express')
const mongoClient = require('mongodb').MongoClient;
const app = express()
app.use(express.static(__dirname + '/webFiles'));

app.get('/', function (req, res) {
	res.sendFile('/Index.html');
});

mongoClient.connect(url, function (err, db) {
	if (!err) {
		console.log('Connected to database');
	}
	db.close();
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World!');
// }).listen(8080);