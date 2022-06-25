
// Operadores Lógicos

/*

&& - AND -  E -> retorna true se todas as condições forem verdadeiras
|| - OR - OU -> retorna true se alguma das condições forem verdadeiras
! - NOT - NÃO -> retorna o oposto da condição original

*/

const expressaoAnd = true && true && true;
console.log(expressaoAnd); // true

const expressaoOr = true || false || true;
console.log(expressaoOr); // true

const expressaoNot = !(true && false || true);
console.log(expressaoNot); // false

/*

FALSY - valores que representam 0, nulo ou vazio

Utilizado para parar o fluxo de condicionais quando precisar que valores sejam true ou false com/sem a necessidade de utilizar condicionais

false
0
""
''
``
null
undefined
NaN

*/

let falaOi = () => '';
const vaiExecutar = 'Joãozinho';
// const vaiExecutar = null;
console.log(vaiExecutar && falaOi());

const corUsuario = 'vermelho';
// const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);

const a = 0;
const b = null;
const c = false;
const d = 'false'; // string
const e = NaN; // aqui - caso todas as alternativas sejam falsy

console.log( a || b || c || d || e );