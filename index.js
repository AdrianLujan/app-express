var express = require('express');
var app = express();

app.get('/',c_inicio);
app.get('/clientes',c_clientes);
app.get('/productos',c_productos);

function c_inicio(req,res){
    res.send('<h1>Express INICIO</h1>')
}
function c_clientes(req,res){
    res.send('<h1>Cliente 1: Harold Arias</h1>')
    res.send('<h2>Cliente 2: Ivan Oscco</h2>')
    res.send('<h3>Cliente 3: Jafet Carrasco</h3>')
}

function c_productos(req,res){
    res.send('<h1>Producto 1: Monitor 24 pulgadas </h1>')
    res.send('<h2>Producto 2: RAM 16Gb Corsair </h2>')
    res.send('<h3>Producto 3: NVIDIA GTX 1650 </h3>')
}

function c_server(req,res){
    console.log('port:5000');
}

var server = app.listen(5000,c_server);