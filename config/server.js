//Importar o modulo do framework express
var express = require('express');

//Importar o modulo consign
var consign = require('consign');

//Importar o modulo do body-parser
var bodyParser = require('body-parser');

//Importar o modulo express-validator
var expressValidator = require('express-validator');

//Iniciar o objeto do express
var app = express();

// setar as variáreis 'view engine' e 'views' do express
app.set('view engine', 'ejs');
app.set('views', './app/views');

//configurar o middleware express.static
app.use(express.static('./app/public'));

//configurar o middleware body-parser
app.use(bodyParser.urlencoded({extended: true}));

//configurar o middleware express-validator
app.use(expressValidator());

//Efetua o autoload das rotas, das models e dos controllers para o objeto do app
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

// exportar o objeto app
module.exports = app;