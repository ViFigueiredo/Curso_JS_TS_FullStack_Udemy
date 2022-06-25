const Contato = require('../models/ContatoModel');

exports.index = async (req, res) => {
    const contatos = await Contato.buscaContatos();
    // injeta um script no apenas em uma variavel local -> index.ejs
    res.render('index', { contatos });

};
