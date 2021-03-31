var express = require('express');
var app = express();

app.get('/',c_inicio);
app.get('/saludo',c_saludo);

function c_inicio(req,res){
    res.send('<h1>Express INICIO</h1>')
}
function c_saludo(req,res){
    res.send('<h1>HOLA EXPRESS - ALUJAN </h1>')
}
function c_server(req,res){
    console.log('port:7341');
}

var server = app.listen(7341,c_server);