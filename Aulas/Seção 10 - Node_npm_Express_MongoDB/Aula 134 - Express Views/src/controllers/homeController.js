exports.paginaInicial = (req, res) => {
    res.render('index'); // metodo express para renderizar o html
};

exports.trataPost = (req, res) => {
    res.send('Ei! Sou sua nova rota de POST.');
};