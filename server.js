const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


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

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
})

//handle user requests that aren't supported by the app 
//default response for any other request (not found) 
//make sure this is last get test route
//catchall route
app.use((req, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});