require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose'); // importa o mongoose

mongoose.connect(process.env.CONNECTIONSTRING) // retorna uma promise de conexao ao servidor
    .then(() => {
        // console.log('Conectei à base de dados!');
        app.emit('pronto'); // emit um sinal de conexao
    })
    .catch(e => console.log(e));

const routes = require('./routes');
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

app.on('pronto', () => { // captura o retorno do emit
    const porta = 3000;
    const dir = 'http://localhost:';
    app.listen(porta, () => {
        console.log(`Executando na porta ${porta}...`),
            console.log(`${dir}${porta}`)
    });
})

