exports.paginaInicial = (req, res) => {
    // mensagens flash - são apagas depois da visualização, por mais que apaguem do código
    req.flash('info', 'Olá! Assim que funciono...');
    req.flash('error', 'Puts! Ocorreu um erro...');
    req.flash('success', 'Show! Tudo certo por aqui...');
    // log das mensagens
    console.log(req.flash('error'), req.flash('success'), req.flash('info'));

    res.render('index'); // metodo express para renderizar o html
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};