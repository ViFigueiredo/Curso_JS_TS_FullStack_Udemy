import Sequelize from 'sequelize'; // importa Sequelize
import databaseConfig from '../config/database'; // /database/index.js
import Aluno from '../models/Aluno'; // importa a classe Aluno

const models = [Aluno]; // cria um array contendo tudo que a classe Aluno.js retorna

const connection = new Sequelize(databaseConfig); // cria uma instância de conexão do Sequlize com todo o conteúdo de /database/index.js

models.forEach((model) => model.init(connection)); // percorre todo o array models[Aluno] e inicia a instância do model de conexão do sequelize
