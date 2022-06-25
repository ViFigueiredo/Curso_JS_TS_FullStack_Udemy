const express = require('express');
const app = express();
const routes = require('./routes_v2');
const path = require('path');
const { middlewareGlobal, outroMiddlewareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

// estaticos
app.use(express.static(path.resolve(__dirname, 'public')));

// atribui ao path um diretorio de views
app.set('views', path.resolve(__dirname, 'src', 'views'));

// informa qual view engine será utililizado para renderizar o html
app.set('view engine', 'ejs');

// Nossos middlewares
// invocando um middleware antes de todas as requisicoes
app.use(middlewareGlobal, outroMiddlewareGlobal);

app.use(routes);

const porta = 3000;
const dir = 'http://localhost:'
app.listen(porta, () => {
    console.log(`Executando na porta ${porta}...`);
    console.log(`${dir}${porta}`);
});
