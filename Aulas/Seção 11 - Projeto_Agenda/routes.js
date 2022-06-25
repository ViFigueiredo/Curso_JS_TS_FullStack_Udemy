
const express = require('express'); // invoca o expressJS
const route = express.Router(); // invoca o módulo de rotas do ExpressJS
const homeController = require('./src/controllers/homeController') // importa o homeController
const loginController = require('./src/controllers/loginController') // importa o loginController
const contatoController = require('./src/controllers/contatoController') // importa o contatoController

const { loginRequired } = require('./src/middlewares/middleware');

// rota -> home
route.get('/', homeController.index);

// rota -> login
route.get('/login/index', loginController.index); // home
route.post('/login/register', loginController.register); // cadastrar
route.post('/login/login', loginController.login); // logar
route.get('/login/logout', loginController.logout); // sair

// rota -> contato
route.get('/contato/index', loginRequired, contatoController.index); // home
route.post('/contato/register', loginRequired, contatoController.register); // cadastrar
route.get('/contato/index/:id', loginRequired, contatoController.editIndex); // editar home
route.post('/contato/edit/:id', loginRequired, contatoController.edit); // editar post
route.get('/contato/delete/:id', loginRequired, contatoController.delete); // deletar


// exporta todo as referencias para o módulo route
module.exports = route;

