/* Nó de configuração e execução da aplicação */

// Módulos básicos
require('dotenv').config(); // connectionstring
const path = require('path'); // resolvedor de diretórios
const ip = require('ip'); // informações do adaptador de rede local

// Express
const express = require('express');
const app = express();

// Modelador de banco de dados - Mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.emit('pronto');
  })
  .catch(e => console.log(e));

const MongoStore = require('connect-mongo'); // sessão/mongoose

// Configuração de uso interno
app.use(express.urlencoded({ extended: true })); // parser de informações do corpo de uma requisição
app.use(express.json()); // permite receber JSON para dentro da aplicação
app.use(express.static(path.resolve(__dirname, 'public'))); // diretório de arquivos estáticos - img, js, css

// Importação, configuração e invocação de sessão
const session = require('express-session');
const sessionOptions = session({
  secret: 'akasdfj0út23453456+54qt23qv  qwf qwer qwer qewr asdasdasda a6()',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});
app.use(sessionOptions);

// Mensagens temporárias de erro/sucesso
const flash = require('connect-flash');
app.use(flash());

// EJS
app.set('views', path.resolve(__dirname, 'src', 'views')); // diretório
app.set('view engine', 'ejs');

// Middlewares de segurança
// const helmet = require('helmet'); // cabeçalhos HTTP e redireciona para https (evitar em localhost)
// app.use(helmet()); // 9 módulos de proteção para o express
const csrf = require('csurf'); // impede post externo em formulários
app.use(csrf());

// Rotas e Middlewares Gerais
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');
app.use(middlewareGlobal, checkCsrfError, csrfMiddleware);
const routes = require('./routes');
app.use(routes);

// Execução do servidor
const porta = 3000;
app.on('pronto', () => {
  app.listen(porta, () => {
    console.log(`Executando em http://${ip.address()}:${porta}`);
  });
});
