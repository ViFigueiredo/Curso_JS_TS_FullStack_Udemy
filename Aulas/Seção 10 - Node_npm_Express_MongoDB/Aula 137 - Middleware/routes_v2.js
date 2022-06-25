
// esse arquivo é responsavel pelo roteamento
// visualiza uma rota e invoca um controlador (controller) no padrão MVC (model, view, controller)
// o controlador será responsável por decidir qual view e model será utilizado

const express = require('express'); // invoca o expressJS
const route = express.Router(); // invoca o módulo de rotas do ExpressJS
const homeController = require('./src/controllers/homeController_v2') // impporta o homeController
const contatoController = require('./src/controllers/contatoController') // impporta o contatoController
const sobreController = require('./src/controllers/sobreController') // impporta o sobreController


// Middleware é todo o tipo de função que está entre um pedido HTTP e a resposta final que o servidor envia de volta para o cliente.
// A função middleware tem 3 parametros, pedido, resposta e callback. Podes ter n middleware a processar um pedido HTTP, encadeados. Quando um middleware acaba de processar coloca-se no final do código next();, invocando assim a callback e o código continua a correr para o proximo middleware ou resposta final.
// O middleware é portanto uma funcionalidade, funções que executam processos intermédios. Os exemplos mais comuns são interagir com a BD, ir buscar ficheiros estáticos, tratar de erros ou redirecionamentos.

// rota -> home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// rota -> contato
route.get('/contato', contatoController.paginaInicial);

// rota -> sobre
route.get('/sobre', sobreController.paginaInicial);

// exporta todo as referencias para o módulo route
module.exports = route;
