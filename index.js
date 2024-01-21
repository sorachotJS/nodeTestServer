var express = require('express')
var cors = require('cors')
// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'mydb'
// });

var app = express()
app.use(cors())
app.use(express.json())

app.get('/', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000')
})