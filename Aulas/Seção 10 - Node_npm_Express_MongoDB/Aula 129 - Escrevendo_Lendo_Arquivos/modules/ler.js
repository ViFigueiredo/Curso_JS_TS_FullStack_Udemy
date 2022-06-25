
const fs = require('fs').promises; // invoca o modulo node FS e adiciona uma promise

module.exports = (caminho) => fs.readFile(caminho, 'utf8'); // exporta uma f(diretorio) e adiciona o modulo node readfile(diretorio, codificacao)