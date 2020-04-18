require('./config/config.js');    // configuraciones globales como el puerto para la produccion
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app  = express();

app.use(bodyparser.urlencoded({extended:false}));    // para post request
app.use(require('./routes/usuario.js'));



mongoose.connect('mongodb://localhost:27017/cafe',{ useNewUrlParser: true },(err, res)=>{
    if(err) {
        throw err;
        return;
    }
    console.log('Database connected');
});



app.listen(process.env.PORT, ()=>{
    console.log("Servidor Escuchando en puerto 3000");
});
