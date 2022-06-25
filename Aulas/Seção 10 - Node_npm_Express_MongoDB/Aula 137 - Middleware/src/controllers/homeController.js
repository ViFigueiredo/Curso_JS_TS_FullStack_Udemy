exports.paginaInicial = (req, res, next) => {
    console.log('Respondendo ao cliente.');
    res.render('index'); // metodo express para renderizar o html
    console.log(`"paginaInicial" -> Olha o que tem na req.session.nome -> ${req.session.nome }`);
    next();
};

exports.trataPost = (req, res, next) => {
    res.send('Ei! Sou sua nova rota de POST.');
};