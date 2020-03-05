const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(cors());;

app.get('/', function (req, res, next){
  return res.send('respond with a resource'); //do sql query
});

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '976MWL25', //password of your mysql db
  database: '647-project'
});

connection.connect(function (err) {
  (err) ? console.log(err + '+++++++++++++++//////////'): console.log('connection********');
});

app.get('/user', function (req, res, next) {
  connection.query(`SELECT * FROM User`,  function (error, results, fields){
   res.send(results);
  }); //do sql query
});

// require('./routes/html-routes')(app, connection);

module.exports = app;
