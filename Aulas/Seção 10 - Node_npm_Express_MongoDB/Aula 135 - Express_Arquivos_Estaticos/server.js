const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));

// estaticos
app.use(express.static(path.resolve(__dirname, 'public')));

// atribui ao path um diretorio de views
app.set('views', path.resolve(__dirname, 'src', 'views'));

// informa qual view engine será utililizado para renderizar o html
app.set('view engine', 'ejs');

app.use(routes);

const porta = 3000;
const dir = 'http://localhost:'
app.listen(porta, () => {
    console.log(`Executando na porta ${porta}...`);
    console.log(`${dir}${porta}`);
});
