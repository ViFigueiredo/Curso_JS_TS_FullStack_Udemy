
// const nome = 'Vinicius';
// const sobrenome = 'Figueiredo';
// const idade = 28;

// function soma(x, y) {
//     return x + y;
// }

// export { nome, sobrenome, idade, soma };

/********************************************* */

const nome = 'Vinicius';
const sobrenome = 'Figueiredo';
const idade = 28;

// default - apenas um por módulo

function soma(x, y) {
    return x + y;
}

// export class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
// }

// contudo privado - não será exportado
// const cpf = 'XXX.XXX.XXX-XX'

/********************************************* */

// exportando um conjunto de constantes
export { nome, sobrenome, idade, soma };

/********************************************* */

// também funciona para arro function anônima
export default (x,y) => x * y;

/********************************************* */

