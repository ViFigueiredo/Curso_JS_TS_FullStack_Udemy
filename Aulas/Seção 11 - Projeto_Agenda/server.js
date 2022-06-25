// Utilizado MVC
// M -> Model -> manipula a base de dados
// V -> View -> o que será renderizado no cliente
// C -> Controller -> gerencia os models e views

// importa ./.env com os dados do BD
require('dotenv').config();

// importa e invoca o express
const express = require('express');
const app = express();

// importa e invoca o mongoose
const mongoose = require('mongoose');

// mongoose - conexao e modelagem do BD
// retorna uma promisse de conexão do BD
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto'); // emite um sinal de conexao
    })
    .catch(e => console.log(e));

// importa um middleware de sessão do express
// permite salvar um cookie e id no ambiente do cliente ao se conectar ao servidor
const session = require('express-session');

// por padrão salva na RAM, prejudicando a performance da app, desta forma fazemos
// importar o connect-mongo > permite um relacionamento com o BD
const MongoStore = require('connect-mongo');

// importa flash-messages > mensagens autodestruidas do BD
// muito utilizados em mensagens de erros e alertas
// são armazenadas em sessao
const flash = require('connect-flash');

// importa o routes.js
// rotas > /
// ...com.br/home/cadastro/contato
const routes = require('./routes');

// importa o node module path
// permite acesso direto a raiz
const path = require('path');

// implementações de segurança
const helmet = require('helmet'); // express module para segurança de rotas
const csrf = require('csurf'); // CSRF token middleware - permite que ninguem consiga postar alguma coisa no meio de alguma requisição/resposta

// importa as middlewares
// f() que permite acesso as requisições, respostas e a uma proxima f()
// utilizado no ciclo de solicitação/resposta
const { middlewareGlobal, outroMiddlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

// invoca o helmet
app.use(helmet());

// permite postar formularios pra dentro da nossa app
app.use(express.urlencoded({ extended: true }));

// permite importar json pra dentro da nossa app
app.use(express.json());

// importa e invoca os arquivos estáticos
// arquivos que são acessados e modificados diretamente > img, css, js
app.use(express.static(path.resolve(__dirname, 'public')));

// config de sessão
const sessionOptions = session({
    secret: 'klasjdlksjadjlsadjlasjldjaklsjld',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

// invoca sessão
app.use(sessionOptions);

// invoca flash-messages
app.use(flash());

// seta o diretorio dos arquivos de views
app.set('views', path.resolve(__dirname, 'src', 'views'));

//seta a engine e o tipo de arquivo de views
// arquivos .ejs
app.set('view engine', 'ejs');

// invoca os csrf tokens
app.use(csrf());

// invoca os middlewares
app.use(middlewareGlobal, outroMiddlewareGlobal, checkCsrfError, csrfMiddleware);

// invoca as rotas
app.use(routes);

// sinal de conexao utilizado pelo mongoose
app.on('pronto', () => {
    const porta = 3000; // porta de rede
    const dir = 'http://localhost:'; // raiz
    app.listen(porta, () => { // escuta as requisicoes e resolucoes da aplicação
        console.log(`Executando na porta ${porta}...`),
            console.log(`${dir}${porta}`)
    });
})

