

// FOR IN - lê os indices ou chaces do obj/arr

// arr
const frutas = ['morango', 'abacaxi', 'uva'];

for (let chave in frutas) {
    console.log(chave,frutas[chave]);
}

// obj
const pessoa = {
    nome: 'Vinicius',
    sobrenome: 'Belesa',
    idade: 28
};

for (let i in pessoa) {
    console.log(i, pessoa[i]);
}

// FOR OF - lê os valores iteraveis de um arr

// arr
const frutas = ['morango', 'abacaxi', 'uva'];

for (let chave of frutas) {
    console.log(chave);
}

// obj - como obj não é iteravel devemos usar o FOR IN

// forEach - lê os valores iteraveis de um arr

// arr
const frutas = ['morango', 'abacaxi', 'uva'];

// possui argumentos obrigatorios e opcionais
frutas.forEach (
    function (valor, indice, array) {        
        console.log(valor, indice, array)
    }
)

// obj - como obj não é iteravel devemos usar o FOR IN

