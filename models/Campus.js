const mongoose = require('mongoose');

const CampusSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'El nombre del campus es requerido'],
        trim: true,
        maxleng: [50, 'El nombre del campus no puede tener más de 50 caracteres']
    }
});