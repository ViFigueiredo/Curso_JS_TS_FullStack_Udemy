/* Configuração de rotas */

// Módulos
const express = require('express');
const route = express.Router();

// Controllers
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');

// Rotas -> Página inicial
route.get('/', homeController.index);

// Rotas -> Página de login e registro
route.get('/login/index', loginController.index);

// Rotas -> Envio de cadastro
route.post('/login/register', loginController.register);

// Rotas -> Envio de login
route.post('/login/login', loginController.login);

// Rotas -> Envio de login
route.get('/login/logout', loginController.logout);

// Rotas -> Casdastro de contato
route.get('/contato/index', contatoController.index);

module.exports = route;
