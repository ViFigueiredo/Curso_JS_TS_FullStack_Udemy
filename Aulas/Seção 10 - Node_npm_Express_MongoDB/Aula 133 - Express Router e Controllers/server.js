const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(routes);

const porta = 3000;
const dir = 'http://localhost:'
app.listen(porta, () => {
    console.log(`Executando na porta ${porta}...`);
    console.log(`${dir}${porta}`);
});
