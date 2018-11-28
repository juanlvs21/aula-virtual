const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./mongodb');

const app = express();

// Settings
app.set('port', process.env.PORT || 3000); // Toma el puerto que da el servidor o si no usa el puerto 3000

// Middlewares
app.use(morgan('dev')); // Sirve para ver las peticiones  en consola ej:  GET / 404 14.115ms - 139
app.use(express.json()); // Comprueba si es un dato json, si lo es puede entrar un dato al servidor

// Acceso
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Routes
app.use('/api/mensajes', require('./routes/mensajes.routes')); // Ruta de la api en el archivo del chat
require('./routes/estructura.routes')(app); // Ruta de la api en el archivo de la estructura de la aplicacion

// Static files
// app.use(express.static(path.join(__dirname, 'public'))); // Path Se encarga de unir directorios

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})