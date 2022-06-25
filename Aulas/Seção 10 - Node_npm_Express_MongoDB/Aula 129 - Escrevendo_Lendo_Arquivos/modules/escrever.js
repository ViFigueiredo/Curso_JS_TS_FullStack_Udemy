
const fs = require('fs').promises; // invoca o modulo node FS e adiciona uma promise

module.exports = (caminho, dados) => {// exporta uma f(diretorio, arquivo) e adiciona o modulo node writeFile(diretorio, arquivo, {acao, codificao})
    fs.writeFile(caminho, dados, { // modulo node 
        flag: 'w', // sobrescreve
        // flag: 'a', // mantem e adiciona
        encoding: 'utf8' // opcional
    });
}

// OBS
// JSON é um objeto com notação diferente
// as chaves precisam estar entre "chave"