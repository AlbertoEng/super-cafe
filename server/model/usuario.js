
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


let Schema  = mongoose.Schema;

let rolesValidos = {
    values: [ 'ADMIN_ROLE', 'USER_ROLE' ],
    message: "{VALUE} no es un role valido de usuario"
}

let usuarioSchema = new Schema({

    nombre: {
        type: String,
        required: [true,'El nombre es necesario']
    },
    email : {
        type: String,
        unique: true,
        required: [true, 'el correo es necesario']
    },
    password : {
        type:String,
        required: [true, 'la contrasenia es obligatoria']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'user_role',
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }



});

usuarioSchema.plugin( uniqueValidator, {message : '{PATH} no se debe de repetir.'});


//exportamos el modelo con nombre usuario desde la variable usuarioSchema
module.exports = mongoose.model('usuario', usuarioSchema);