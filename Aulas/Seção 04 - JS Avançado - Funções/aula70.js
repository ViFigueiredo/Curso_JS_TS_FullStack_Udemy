
// Aula 70 - Retorno da função

// função dentro de função
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + " " + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);


// exemplo prático

function criaMultiplicador(multiplicador) {
    //multiplicador
    return function (n) {
        return n * multiplicador;
    };    
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadriplica(10));