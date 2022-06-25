const path = require('path'); // importa o modulo node path
const caminhoArquivo = path.resolve(__dirname, 'pessoas.json'); // adiciona uma promise no path e retorna como um resolve o arquivo JSON
const escrever = require('./modules/escrever'); // importa o arquivo modules/escrever
const ler = require('./modules/ler'); // importa o arquivo modules/ler

// ESREVER -> obj de nome de pessoas
// const pessoas = [
//     { nome: 'Vinicius'},
//     { nome: 'Rebecka'},
//     { nome: 'Marcio'},
//     { nome: 'Karine'},
// ];

// converte o obj.pessoas em JSON e invoca o modulo escrever.js
// const json = JSON.stringify(pessoas, '', 2);
// escrever(caminhoArquivo, json);

// LER
// async sempre retorna uma promise
// f() que recebe um diretorio de uma promise e invoca outra f() com os dados presentes nesse diretorio
async function leArquivo(diretorio) { 
    const dados = await ler(diretorio);
    renderizaDados(dados);
}

// f() que recebe um arquivo, le seus dados, converte JSON/JS e loga a informacao
function renderizaDados(dados) {
    dados = JSON.parse(dados)
    dados.forEach(valor => console.log(valor));
    dados.forEach(valor => console.log(valor.nome));
}

// invoca leArquivo() recebendo o diretorio
leArquivo(caminhoArquivo);

