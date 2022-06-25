const express = require('express'); // importa o modulo node express
const app = express(); // invoca o express

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button> Enviar </button>
    `)
});

// ? -> esse parametro pode ou nao ser recebido
// : -> parametro
app.get('/testes/?:idUsuarios?/:parametro?', (req, res) => {

    // log e envio de todos as query
    console.log(req.query);
    res.send(req.query);
    // res.send(req.query.nome);

    // log e envio de todos os parametros
    // console.log(req.params);
    // res.send(req.params);

    // log e envio de parametro especifico
    // console.log(req.params.idUsuarios);
    // res.send(req.params.idUsuarios);
})

app.post('/', (req, res) => {
    console.log(req.body);
    // req.body.nome -. "name" do input
    res.send(`Foi enviado: "${req.body.nome}".`)
});

const porta = 3000;
const dir = 'http://localhost:'
app.listen(porta, () => {
    console.log(`Executando na porta ${porta}...`);
    console.log(`${dir}${porta}`);
});


// http://meusite.com.br/profiles/12345?campanha=googleads&nome_campanha=seila

// req_param -> 12345
// req_query -. ?campanha=googleads&nome_campanha=seila