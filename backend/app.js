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
  password: '', //password of your mysql db
  database: '647-project'
});

connection.connect(function (err) {
  (err) ? console.log(err + '+++++++++++++++//////////'): console.log('connection********');
  let createUser = "CREATE TABLE IF NOT EXISTS `user` (`id` INT NOT NULL AUTO_INCREMENT, `username` VARCHAR(45) NOT NULL, PRIMARY KEY(`id`), UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE, INDEX `drivers_license_idx` (`username` ASC) VISIBLE);"
  let createBars = "CREATE TABLE IF NOT EXISTS `bars` (`id` INT NOT NULL AUTO_INCREMENT, `name` VARCHAR(45) NOT NULL, `address` VARCHAR(45) NOT NULL, PRIMARY KEY(id));"
  let createUserBars = "CREATE TABLE IF NOT EXISTS `user_bars` (`user_id` INT NOT NULL, `bar_id` INT NOT NULL, FOREIGN KEY (`user_id`) REFERENCES `647-project`.`user`(`id`), FOREIGN KEY (`bar_id`) REFERENCES `647-project`.`bars` (`id`), PRIMARY KEY (`user_id`, `bar_id`));"
  let createDriversLicence = "CREATE TABLE IF NOT EXISTS `drivers_license` (`id` INT NOT NULL REFERENCES `user` (`id`), `name` VARCHAR(45) NOT NULL, `birthdate` DATE NOT NULL, `age` INT NOT NULL, `address` VARCHAR(45) NOT NULL, `drivers_license_num` VARCHAR(45) NOT NULL, PRIMARY KEY (`id`));"
  let createRemedy = "CREATE TABLE IF NOT EXISTS `remedy` (`id` INT NOT NULL AUTO_INCREMENT, CONSTRAINT `user_id` FOREIGN KEY (`id`) REFERENCES `647-project`.`user`(`id`), PRIMARY KEY (`id`));"
  let createHomeRemedy = "CREATE TABLE IF NOT EXISTS `home_remedy` (`id` INT NOT NULL REFERENCES `remedy` (`id`), `info` VARCHAR(200) NOT NULL, `recipe` VARCHAR(200) NOT NULL, PRIMARY KEY (`id`));"
  let createPharmRemedy = "CREATE TABLE IF NOT EXISTS `pharm_remedy` (`id` INT NOT NULL REFERENCES `remedy` (`id`), `name` VARCHAR(50), `dose` VARCHAR(30), PRIMARY KEY (`id`))"
  connection.query(createUser, function (err, res){
    if(err) throw err;
    console.log("user table created");
  });
  connection.query(createBars, function (err, res) {
    if (err) throw err;
    console.log("bars table created");
  });
  connection.query(createUserBars, function (err, res) {
    if (err) throw err;
    console.log("user_bars table created");
  });
  connection.query(createDriversLicence, function (err, res) {
    if (err) throw err;
    console.log("drivers_license table created");
  });
  connection.query(createRemedy, function (err, res) {
    if (err) throw err;
    console.log("remedy table created");
  });
  connection.query(createHomeRemedy, function (err, res) {
    if (err) throw err;
    console.log("home_remedy table created");
  });
  connection.query(createPharmRemedy, function (err, res) {
    if (err) throw err;
    console.log("pharm_remedy table created");
  });
});

app.get('/user', function (req, res, next) {
  connection.query(`SELECT * FROM user`,  function (error, results, fields){
   res.send(results);
  }); //do sql query
});

app.get('/topBars', function (req, res, next) {
  connection.query('SELECT `name` FROM user_bars `ub1`, `bars` INNER JOIN user_bars `ub2` WHERE `ub1`.user_id <> `ub2`.user_id AND `ub1`.bar_id = `ub2`.bar_id AND `ub1`.bar_id = bars.id GROUP BY name ORDER BY COUNT(*) DESC LIMIT 0,2', function (error, results, fields) {
    res.send(results);
  });
});

app.get('/topRemedies', function(req, res, next) {
  connection.query('(SELECT `p`.name, `p`.dose FROM pharm_remedy `p` JOIN (SELECT `name`, COUNT(*) AS `pcount` FROM pharm_remedy GROUP BY `name`) `p2` ON (`p2`.name = `p`.name) ORDER BY `p2`.pcount DESC LIMIT 0,1) UNION ALL (SELECT `h`.info, `h`.recipe FROM home_remedy `h` JOIN (SELECT `recipe`, COUNT(*) AS `hcount` FROM `home_remedy` GROUP BY `recipe`) `h2` ON (`h2`.recipe = `h`.recipe) ORDER BY `h2`.hcount DESC) LIMIT 0,2', function(error, results, fields) {
    res.send(results);
  });
});

app.get('/remedies', function(req, res, next) {
  connection.query('SELECT * FROM (SELECT * FROM home_remedy) AS `home` UNION ALL SELECT * FROM pharm_remedy', function(error, results, fields) {
    res.send(results);
  })
})

app.get('/underage', function(req, res, next) {
  connection.query('SELECT * from `user`, `drivers_license` WHERE `age` < 21 AND user.`id` = drivers_license.`id`', function(error, results, fields) {
    res.send(results);
  })
})

// require('./routes/html-routes')(app, connection);

module.exports = app;
