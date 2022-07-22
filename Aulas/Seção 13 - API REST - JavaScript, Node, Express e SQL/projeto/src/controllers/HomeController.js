import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    try {
      const novoAluno = await Aluno.create({
        nome: 'Rebecka',
        sobrenome: 'Cybelle',
        email: 'rebecks_cybelle@gmail.com',
        idade: 24,
        peso: 73,
        altura: 1.63,
      });
      res.json(novoAluno);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new HomeController();
