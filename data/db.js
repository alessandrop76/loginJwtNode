const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'estudos',
    password: 'relogio',
});

connection.connect();

module.exports = connection;