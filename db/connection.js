const mysql = require('mysql2');

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //your mysql username
        user: 'root',
        //your sql password
        password: 'michelle12',
        database: 'election'
    },
    console.log('connected to the election database')
);

module.exports = db;
