
const express = require('express'); // invoca o expressJS
const route = express.Router(); // invoca o módulo de rotas do ExpressJS
const homeController = require('./src/controllers/homeController') // impporta o homeController
const contatoController = require('./src/controllers/contatoController') // impporta o contatoController
const sobreController = require('./src/controllers/sobreController') // impporta o sobreController

// rota -> home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// rota -> contato
route.get('/contato', contatoController.paginaInicial);

// rota -> sobre
route.get('/sobre', sobreController.paginaInicial);

// exporta todo as referencias para o módulo route
module.exports = route;
