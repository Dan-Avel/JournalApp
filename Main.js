var http = require('express');

const express = require('express')
const app = express()
app.use(express.static(__dirname + '/webFiles'));

app.get('/', function (req, res) {
	res.sendFile('/Index.html');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World!');
// }).listen(8080);