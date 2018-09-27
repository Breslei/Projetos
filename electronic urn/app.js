var app =require('./src/server.js');
const express = require('express');

app.use(express.static('.'))//reconhece arquivos estáticos como html, js;
var routeHome =require('./app/routes/home');
routeHome(app);

app.listen(3000,()=>{
    console.log('peguei');
    });