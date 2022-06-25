const express = require('express'); // importa o modulo node express
const app = express(); // invoca o express

// AÇAO DE UMA API
// acao ->       criar    ler     atualizar   deletar
// CRUD ->       CREATE   READ    UPDATE      DELETE
// express->     POST     GET     PUT         DELETE

// ROTAS
// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

// app.get('/', (req, res) => {
//     res.send('Hello <b>World</b>!')
// });

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    `)
});

app.post('/', (req, res) => {
    res.send(`Recebi o formulário!`)
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente!')
});

// app.listen(3000);
const porta = 3000;
const dir = 'http://localhost:'
app.listen(porta, () => {
    console.log(`Executando na porta ${porta}...`);
    console.log(`${dir}${porta}`);
});

// express
// permite o roteamento de rotas web

// npm i express