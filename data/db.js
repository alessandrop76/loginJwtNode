const mysql = require('mysql2');
const config = require('../.env');

const connection = mysql.createConnection(
    config //Your database configuration here
    );

connection.connect();

module.exports = connection;