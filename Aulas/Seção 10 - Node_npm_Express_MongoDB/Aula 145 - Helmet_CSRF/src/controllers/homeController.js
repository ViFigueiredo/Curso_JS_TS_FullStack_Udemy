exports.paginaInicial = (req, res) => {

    // injeta um script no apenas em uma variavel local -> index.ejs
    res.render('index', {
        titulo: 'Este será o <span style="color: red;">titulo da pagina</span>',
        numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }); 

    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};