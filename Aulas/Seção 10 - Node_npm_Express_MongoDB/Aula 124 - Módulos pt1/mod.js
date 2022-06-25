
// EX2

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;

// EX1
// const nome = 'Vinicius';
// const sobrenome ='Figueiredo';

// const falaNome = () => `${nome} ${sobrenome}`;

// // export em NodeJS
// // método 1
// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;
// // método 2
// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// // método 3 -> this faz referencia ao modules.exports
// this.qualquerCoisa = 'O que eu quiser exportar.'

// // console.log(module.exports);