
// esse arquivo é responsavel pelo roteamento
// visualiza uma rota e invoca um controlador (controller) no padrão MVC (model, view, controller)
// o controlador será responsável por decidir qual view e model será utilizado

const express = require('express'); // invoca o expressJS
const route = express.Router(); // invoca o módulo de rotas do ExpressJS
const homeController = require('./controllers/homeController') // impporta o homeController
const contatoController = require('./controllers/contatoController') // impporta o contatoController
const sobreController = require('./controllers/sobreController') // impporta o sobreController

// rota -> home
route.get('/', homeController.paginaInicial);
route.get('/', homeController.trataPost);

// rota -> contato
route.get('/contato', contatoController.paginaInicial);

// rota -> sobre
route.get('/sobre', sobreController.paginaInicial);

// exporta todo as referencias para o módulo route
module.exports = route;
