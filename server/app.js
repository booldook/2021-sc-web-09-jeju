var express = require('express')
var app = express()

app.listen(3000, function() {
	console.log('http://127.0.0.1:3000')
})

app.get('/', function(req, res) {
	res.send('<h1>서버가 시작되었습니다.</h1>')
})