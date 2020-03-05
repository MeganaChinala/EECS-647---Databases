import pw from 'Secrets.js';

var express = require('express');

var app = express();

app.get('/user', function (req, res, next){
  return res.send('respond with a resource'); //do sql query
});

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pw', //password of your mysql db
  database: '647-project'
});

connection.connect(function (err) {
  (err) ? console.log(err + '+++++++++++++++//////////'): console.log('connection********');
});

// require('./routes/html-routes')(app, connection);

module.exports = app;
