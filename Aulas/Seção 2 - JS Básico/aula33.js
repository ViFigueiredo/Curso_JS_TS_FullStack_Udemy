
// Aula 33 - Tipos de Valores

// Primitivos (imutáveis) - string, number, boolean, undefined, null, bigint e symbol - valor de memória diferente

let a = 'A';
let b = a; // cópia
console.log(a, b);

a = 'outra coisa';
console.log(a, b);

// Referência (mutável) - array, object, function - mesmo valor de memória

let c = [1, 2, 3];
let d = c;
console.log(c, d);

c.push(4);
console.log(c, d);

d.pop();
console.log(c, d);

// para copiar valor mutáveis (referência) basta utilizar o operador 'spread'

// let outraVariavel = [...variavel]; // array
// let outraVariavel = {...variavel}; // object
// let outraVariavel = (...variavel); // function