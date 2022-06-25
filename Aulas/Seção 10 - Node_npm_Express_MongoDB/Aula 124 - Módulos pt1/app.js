
// ex1 - carrega todo modulo primeiro
// const mod1 = require('./mod1');
// console.log(mod1);
// console.log(mod1.falaNome()); // undefined = ausencia de return na f()

// ex2 - carrega somente o que será utilizado
// const falaNome = require('./mod1').falaNome;
// console.log(falaNome());

// ex3 - carrega todo modulo primeiro
// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;
// console.log(falaNome());

// ex4 - atribuição por desestruturação (destructuring assignment)
const { nome, sobrenome, falaNome, Pessoa } = require('./mod1');
// console.log(nome);
// console.log(sobrenome);
// console.log(falaNome());

// Utilizando Class
const p1 = new Pessoa('Vinicius');
console.log(p1);