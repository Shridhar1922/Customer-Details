const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);


const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

const cors = require('cors');

app.use(cors()) // Use this after the variable declaration
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to our site"});
});

// Require Notes routes
require('./app/routes/CustomerData.routes.js')(app);


// listen for requests
app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});