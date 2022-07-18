
// Functions

function saudacao(nome) {
    return `Bom dia ${nome}.`
    // console.log(`Bom dia ${nome}.`);
    // return 123456;
}

const variavel = saudacao("Luís"); //123456
console.log(variavel);

// Outra exemplo de functions

function soma(x = 1, y = 2) {
    const resultado = x + y;
    return resultado;
    console.log('Olá, mundo!') // após return, nada será executado
}

const resultado = soma(2, 2);
console.log(resultado);

// função anônima
const raiz = function (n) {
    return n ** 0.5; // raiz quadrada
}; // necessário

// arrow function full
const raiz = (n) => {
    return n ** 0.5; // raiz quadrada
}; // necessário

// arrow function compact
const raiz = n => n ** 0.5;

console.log(raiz(9));