const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

// Rotas -> home
route.get('/', homeController.index);

// Rotas -> login
route.get('/login/index', loginController.index);

// Rotas -> register
route.post('/login/register', loginController.register);

module.exports = route;
