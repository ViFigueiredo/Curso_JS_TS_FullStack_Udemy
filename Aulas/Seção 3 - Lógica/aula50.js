

// Atribuição por desestruturação - Array

let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

const letras = [b,c,a];
[a,b,c] = letras;
console.log(a,b,c);

// ******************************************

let numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
let [primeiroNumero,segundoNumero, ...resto] = numeros;
console.log(primeiroNumero,segundoNumero);
console.log(resto);

//... operador REST - pega o resto de um array/obj
//... operador SPREAD - reorganiza ou espalha o conteúdo de um array/obj

// ******************************************

//                      0
//           0 1 2    0 1 2    0 1 2
numeros = [ [1,2,3], [4,5,6], [7,8,9] ];
let [,[,,seis]] = numeros; // jeito mais dificil
console.log(seis);

let [lista1,lista2,lista3] = numeros; // jeito mais fácil
console.log(lista3[2]);