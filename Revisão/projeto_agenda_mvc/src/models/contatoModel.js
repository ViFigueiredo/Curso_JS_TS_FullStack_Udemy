const mongoose = require('mongoose');
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: false, default: '' },
  telefone: { type: String, required: false, default: '' },
  email: { type: String, required: false, default: '' },
  criadoEm: { type: String, default: Date.now }
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

// this => contatoController

function Contato(body) {
  this.body = body;
  this.errors = [];
  this.contato = null;
}

// função estática, fora do constructor
Contato.buscaPorId = async (id) => {
  if (typeof id !== 'string') return;
  const contato = await ContatoModel.findById(id);
  return contato;
}; //

Contato.buscaContatos = async () => {
  const contatos = await ContatoModel.find().sort({ criadoEm: -1 });
  return contatos;
}; 

Contato.delete = async (id) => {
  if (typeof id !== 'string') return;
  const contato = await ContatoModel.findByIdAndDelete(id);
  return contato;
}; 

// neste model estamos trabalhando com constructor functions e prototypes
// não funciona com arrow function uma vez que não retorna this

Contato.prototype.register = async function () {
  this.valida();
  if (this.errors.length > 0) return;
  this.contato = await ContatoModel.create(this.body);
}

Contato.prototype.valida = function () {
  this.cleanUp();
  // o e-mail precisa ser válido
  if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido!');
  if (!this.body.nome) this.errors.push('Nome é um campo obrigatório!');
  if (!this.body.email && !this.body.telefone) this.errors.push('Pelo menos um meio de contato precisa ser informado: telefone ou e-mail!');
}

Contato.prototype.cleanUp = function () {
  for (const key in this.body) {
    if (typeof this.body[key] !== 'string') {
      this.body[key] = '';
    }
  }

  this.body = {
    nome: this.body.nome,
    sobrenome: this.body.sobrenome,
    telefone: this.body.telefone,
    email: this.body.email
  }
}

Contato.prototype.edit = async function (id) {
  if (typeof id !== 'string') return;
  this.valida();
  if (this.errors.length > 0) return;

  // inicia em null
  this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true });
}

module.exports = Contato;
