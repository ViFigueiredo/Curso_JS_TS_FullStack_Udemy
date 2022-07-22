import Sequelize, { Model } from 'sequelize'; // importa sequelize

// como os dados da migration são inseridos no banco
export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      email: Sequelize.STRING,
      idade: Sequelize.INTEGER,
      peso: Sequelize.FLOAT,
      altura: Sequelize.FLOAT,
    }, { sequelize });
    return this;
  };
};
