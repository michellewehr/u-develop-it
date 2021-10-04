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

// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// })

//GET a single candidate 
db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
    if(err) {
        console.log(err);
    }
    console.log(row);
})

// delete a candidate 
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// })

const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
VALUES (?, ?, ?, ?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
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