
// Aula 68 - Maneiras de declarar funções

// First-class objects  - Objetos de primeira classe
// ou seja, toda função é um dado


// Declaração de função (Function Hoisting)
falaOi();
function falaOi () {
    console.log('Oi.');
}

// Function Expression (variavel recebe uma função anônima)
const souUmDado = function () {
    console.log('Sou um dado.');
}; 
souUmDado();

// Arrow Function - ECMA6
const funcaoArrow = () => {
    console.log('Sou uma arrow function.');
}
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar () {
        console.log('Estou falando...');
    }
};
obj.falar();


