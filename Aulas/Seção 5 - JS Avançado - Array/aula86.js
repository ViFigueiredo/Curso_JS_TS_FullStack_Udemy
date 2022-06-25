
// Aula 86 - Reduzindo arrays

// Some todos os números
// Retorne um arr com os pares
// Retorne um arr com o dobro dos vallores

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(((acumulador, valor) => {
    acumulador += valor;
    return acumulador;
}), 0)
// console.log(total);

const pares = numeros.reduce(((acumulador, valor) => {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}), [])
// console.log(pares);

const dobro = numeros.reduce(((acumulador, valor) => {
    acumulador.push(valor * 2);
    return acumulador;
}), [])
// console.log(dobro);


const pessoas = [
    { nome: 'Vinicius', idade: 28 },
    { nome: 'Lucas', idade: 22 },
    { nome: 'Rafael', idade: 16 },
    { nome: 'Davi', idade: 10 },
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador;
});
console.log((maisVelha));





