const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

// Construtor do model
const LoginSchema = new mongoose.Schema({
  apelido: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

// neste model estamos trabalhando com classes

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async login() {
    this.valida();
    if (this.errors.length > 0) return;
    this.user = await LoginModel.findOne({ email: this.body.email }); // valida email

    if (!this.user) {
      this.errors.push('Usuário não existe!');
      return;
    };

    if (!bcryptjs.compareSync(this.body.password, this.user.password)) {
      this.errors.push('Senha inválida!');
      this.user = null;
      return;
    }
  }

  // quando trabalhamos com envio de dados para o banco, devemos trabalhar com async devido ao retorno ser uma promisse -> async > await > try > catch
  async register() {
    this.valida();
    if (this.errors.length > 0) return; // dados puros
    await this.userExists();
    if (this.errors.length > 0) return; // dados tratados do form
    const salt = bcryptjs.genSaltSync(); //hash
    this.body.password = bcryptjs.hashSync(this.body.password, salt);
    this.user = await LoginModel.create(this.body);
  }

  async userExists() {
    //se usuário existir
    this.user = await LoginModel.findOne({ email: this.body.email });
    if (this.user) this.errors.push('Usuário já existe.');
  }

  valida() {
    this.cleanUp();
    // apelido não pode estar vazio
    if(this.body.apelido === '') this.errors.push('Apelido inválido!')
    // o e-mail precisa ser válido
    if (!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido!');
    // a senha precisa ter entre 3 e 50
    if (this.body.password.length < 3 || this.body.password.length > 50) {
      this.errors.push('A senha precisa ter entre 3 e 50 caracteres.');
    }
  }

  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }

    // garante que apenas os campos do formulário serão enviados pelo model
    // ou seja, remove o _csrf
    this.body = {
      apelido: this.body.apelido,
      email: this.body.email,
      password: this.body.password
    };
  }
}

module.exports = Login;
