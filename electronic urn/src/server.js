const express = require('express');
const consign = require('consign');
var app = express();

consign().include("./app/routes").into(app);//reconhece a pasta de rotas automaticamente

app.set('view engine','ejs');
app.set('views','./app/views');

module.exports=app;