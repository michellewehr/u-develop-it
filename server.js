const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());




//handle user requests that aren't supported by the app 
//default response for any other request (not found) 
//make sure this is last get test route
app.use((req, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});