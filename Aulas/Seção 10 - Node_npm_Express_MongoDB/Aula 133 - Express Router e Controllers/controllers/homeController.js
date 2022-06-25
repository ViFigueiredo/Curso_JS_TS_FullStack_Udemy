exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button> Enviar </button>
    `)
};

exports.trataPost = (req, res) => {
    res.send('Ei! Sou sua nova rota de POST.');
};