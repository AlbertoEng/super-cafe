const express = require('express');
const app  = express();
const Usuario = require('../model/usuario');     // para hacer instancias de usuario.

app.get('/usuario',(req,res)=>{
    let salida = {
        nombre: "jesus",
        apellido: 'Eng',
        edad: 30
    };

    res.send(salida);
});

app.post('/usuario',(req,res)=>{     // usando urlencoded para recibir como objetos los parametros del request
    
    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email : body.email,
        password: body.password,
        role : body.role
    });

    usuario.save( (err, usuarioDB)=>{
        if(err){
            return res.status(400).json({
                ok:false,
                err
            });
        }
        
        res.json({
            ok: true,
            usuario: usuarioDB
        })
    });



});

app.put('/usuario/:id',(req,res)=>{
    let salida = {
        nombre: req.params.id
    };

    res.send(salida);
});

app.delete('/usuario',(req,res)=>{
    let salida = {
        nombre: 'Arnold',
        apellido: req.query.apellido,
        edad: req.query.edad
    };

    res.json(salida);
});

module.exports = app;