const express = require('express');
const dotenv = require('dotenv');

//leer el archivo de configuración
dotenv.config({path:'./config/config.env'});

//crear una app a partir de la clase express
const app = express();

//espaecificar el archivo de rutas campus.js - alumnos.js
const campus = require('./routes/campus');
const alumnos = require('./routes/alumnos');

//montar(activar) rutas
app.use('/api/v1/campus', campus);
app.use('/api/v1/alumnos', alumnos);  


//establecer el puerto en localhost
const PORT = process.env.PORT || 5000;

//lanzar la app
app.listen(PORT, console.log(`Server corriendo en modo ${process.env.NODE_ENV} en el  puerto ${PORT}}`));