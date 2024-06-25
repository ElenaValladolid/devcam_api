const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//leer el archivo de configuración
dotenv.config({path:'./config/config.env'});

//conexion a MongoDB
connectDB();

//crear una app a partir de la clase express
const app = express();

//espaecificar el archivo de rutas campus.js - alumnos.js
const campus = require('./routes/campus');



//montar(activar) rutas
app.use('/api/v1/campus', campus);
 
//establecer el puerto en localhost
const PORT = process.env.PORT || 5000;

//lanzar la app
app.listen(PORT, console.log(`Server corriendo en modo ${process.env.NODE_ENV} en el  puerto ${PORT}}`));