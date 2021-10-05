const express = require('express');
// const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const app = express();
const inputCheck = require('./utils/inputCheck');
//connect to connection.js file 
const db = require('./db/connection');
// Add near the top of the file--added after creation of apiRoutes
const apiRoutes = require('./routes/apiRoutes');



//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Add after Express middleware--added after creation of apiRoutes
app.use('/api', apiRoutes);
//By adding the /api prefix here, we can remove it from the individual route expressions after we move them to their new home.

//handle user requests that aren't supported by the app 
//default response for any other request (not found) 
//make sure this is last get test route
//catchall route
app.use((req, res) => {
    res.status(404).end();
});

//start the server after db connection 
db.connect(err => {
    if (err) throw err;
    console.log('Database connected');
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`);
    });
})


