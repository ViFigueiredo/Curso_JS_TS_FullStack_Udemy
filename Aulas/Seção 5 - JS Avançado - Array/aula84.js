
// Aula 84 - Filtrando arrays
// Sempre retorna um array com a mesma quantidade ou menos

// Retornando numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
// const numerosFiltrados = numeros.filter(function (valor) {
//     if (valor > 10) {
//         return true;
//     } else {
//         return false
//     }
// });
const numerosFiltrados = numeros.filter(arr => arr > 10);
// console.log(numerosFiltrados);

const pessoas = [
    { nome: 'Vinicius', idade: 28},
    { nome: 'Lucas', idade: 22},
    { nome: 'Rafael', idade: 16},
    { nome: 'Davi', idade: 10},
];
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
// console.log(pessoasComNomeGrande);

const pessoasMaiorIdade = pessoas.filter(obj => obj.idade >= 18);
// console.log(pessoasMaiorIdade);

const nomeTerminaS = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('s'));
console.log(nomeTerminaS);
