const mongoose = require('mongoose');
const validator = require('validator'); // módulo de validação emails

const ContatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    telefone: { type: String, required: false, default: '' },
    criadoEm: { type: Date, default: Date.now }, // registra data de criacao do contato
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

/*************************** */

function Contato(body) {
    this.body = body;
    this.errors = [];
    this.contato = null;
}

Contato.prototype.register = async function () {
    this.valida();
    if (this.errors.length > 0) return;
    this.contato = await ContatoModel.create(this.body);
}

Contato.prototype.valida = function () {

    this.cleanUp();

    // o-email precisa ser válido
    if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido!');
    if (!this.body.nome) this.errors.push('Nome é obrigatório!');
    if (!this.body.email && !this.body.telefone) this.errors.push('Informe pelo menos um contato: e-mail ou telefone!');
}

// verifica se o conteudo coletado do form é uma string, caso contrario converte em uma string vazia
Contato.prototype.cleanUp = function () {

    for (let key in this.body) {
        if (typeof this.body[key] !== 'string')
            this.body[key] = '';
    }

    // modela o obj que será passado ao BD
    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone,
    }
}

Contato.prototype.edit = async function (id) {
    if (typeof id !== 'string') return;
    this.valida();
    if (this.errors.length > 0) return;
    // aguarda do model um id validado e seu this.body, se true atualiza as informações recebendo uma nova chave "new:true"
    this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true });
}

// Métodos Estáticos
Contato.buscaPorId = async function (id) {
    if (typeof id !== 'string') return;
    const contato = await ContatoModel.findById(id);
    return contato;
};

Contato.buscaContatos = async function () {
    const contatos = await ContatoModel.find().sort({ criadoEm: -1 });
    return contatos;
};

Contato.delete = async function (id) {
    if (typeof id !== 'string') return;
    const contato = await ContatoModel.findOneAndDelete({ _id: id });
    return contato;
};

module.exports = Contato;