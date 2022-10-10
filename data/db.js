const mysql = require('mysql2');
const config = require('../../.env');

const connection = mysql.createConnection(config);

connection.connect();

module.exports = connection;