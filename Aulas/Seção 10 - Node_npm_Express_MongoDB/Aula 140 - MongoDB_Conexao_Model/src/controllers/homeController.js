exports.paginaInicial = (req, res) => {
    res.render('index'); // metodo express para renderizar o html
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};