const Contato = require('../models/contatoModel');

exports.index = async (req, res) => {
  res.render('login');
};

exports.agenda = async (req, res) => {
  const contatos = await Contato.buscaContatos();
  res.render('index', { contatos }); // exporta todos os contatos do model para a página inicial de contatos cadastrados que serão acessados via ejs
};