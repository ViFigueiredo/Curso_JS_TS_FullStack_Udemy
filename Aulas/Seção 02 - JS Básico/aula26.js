
// aula 26 - Numbers

let Inteiro = 10; // number
let Decimal = 10.25; // number
let Dizima = 1.546546546546; // number

console.log(Inteiro.toString() + Decimal); // concatenar string com numero

console.log(Inteiro.toString()); // converter numero em string

console.log(Inteiro.toString(2)); // converter em binário

console.log(Dizima.toFixed(2)); // arredonda e comprime decimais

console.log(Number.isInteger(Inteiro)); // verifica se é inteiro

console.log(Number.isNaN(Inteiro * "Olá")); // verifica se é NaN

// O JS trata as operações entre números flutuantes ou decimais conforme a norma IEEE 754-2008, onde determina como a linguagem de programação trata esses números em linguagem de máquina (hardware) - para resolver isso devemos usar a função parseFloat() ou Number()

let num1 = 0.7;
let num2 = 0.1;

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0

console.log(num1); // 0.999999999999...
console.log(Number.isInteger(num1)); // false

num1 = Number(num1.toFixed(2));
// num1 = parseFloat(num1.toFixed(2));

console.log(Number.isInteger(1.0)); // true
console.log(Number.isInteger(num1)); // true

// outra forma de resolver

let num3 = 0.7;
let num4 = 0.1;

num3 = ((num3 * 10) + (num4 * 10)) / 10;

console.log(num3); // 0.8
console.log(Number.isInteger(num3)); // false