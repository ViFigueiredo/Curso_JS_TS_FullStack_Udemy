
// Aula 35 - Operadores de comparação

/*

> maior
>= maior e igual
< menor
<= menor e igual
== igualdade (valor) *  NÃO INIBI ERRO DE CONVERSÃO (NÃO USAR)
=== igualdade estrita (valor e tipo)
!= diferente (valor) *  NÃO INIBI ERRO DE CONVERSÃO (NÃO USAR)
!== diferente e estrito (valor e tipo)

*/

const numero = 12;
const outroNumero = '12';

console.log(numero > outroNumero); // false
console.log(numero >= outroNumero); // true
console.log(numero < outroNumero); // false
console.log(numero <= outroNumero); // true
console.log(numero == outroNumero); // true
console.log(numero === outroNumero); // false
console.log(numero != outroNumero); // false
console.log(numero !== outroNumero); // true