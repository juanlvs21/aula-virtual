const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./mongodb');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json()); // Check if it is a json data, if what can enter a data to the server

// Access
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
    next();
});

// Routes
app.use('/api/mensajes', require('./routes/mongodb.routes')); // Routes of the api with mongodb
require('./routes/sql.routes')(app); // Routes of the api with sql

// Static files
// app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})