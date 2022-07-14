/* Configuração de rotas */

// Módulos
const express = require('express');
const route = express.Router();

// Controllers
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');
const { loginRequired } = require('./src/middlewares/middleware');

// Rotas -> Página inicial
route.get('/', homeController.index);
route.get('/agenda', loginRequired, homeController.agenda);

// Rotas -> Página de login e registro
route.get('/login/index', loginController.index);

// Rotas -> Cadastrar
route.post('/login/register', loginController.register);

// Rotas -> Logar
route.post('/login/login', loginController.login);

// Rotas -> Deslogar
route.get('/login/logout', loginController.logout);

// Rotas -> Cadastrar contato
route.get('/contato/index', loginRequired, contatoController.index);
route.post('/contato/register', loginRequired, contatoController.register);
route.get('/contato/index/:id', loginRequired, contatoController.editContato);
route.post('/contato/edit/:id', loginRequired, contatoController.edit);
route.get('/contato/delete/:id', loginRequired, contatoController.delete);

module.exports = route;
