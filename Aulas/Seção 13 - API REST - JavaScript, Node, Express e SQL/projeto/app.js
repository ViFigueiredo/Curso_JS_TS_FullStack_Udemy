import dotenv from 'dotenv'; // import dotenv

dotenv.config(); // carrega as informações do ".env"

import './src/database'; // importa /database/index.js

import express from 'express'; // node.express
import homeRoutes from './src/routes/homeRoutes'; // homeRoutes

// utilizando classes e construtores para criação de métodos do projeto
class App {
  constructor() {
    this.app = express(); // invoca express
    this.middlewares(); // invoca os middlewares
    this.routes(); // invoca as rotas
  }

  middlewares() { // configuração de middlewares
    this.app.use(express.urlencoded({ extended: true })); // permite leitura de cadeia de dados (JSON)
    this.app.use(express.json()); // permite o parse de requisições JSON
  }

  routes() { // configuração de rotas
    this.app.use('/', homeRoutes);
  }
}

// exporta toda a classe App
export default new App().app;
