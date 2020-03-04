const path = require('path');
const mysql = require('mysql');
module.exports = function(app, connection) {
    app.get('/user', function(req, res) {
        connection.query('SELECT * FROM `647-project`.user;', function(err, data) {
            (err)?res.send(err):res.json({users:data});
        });
    });
}