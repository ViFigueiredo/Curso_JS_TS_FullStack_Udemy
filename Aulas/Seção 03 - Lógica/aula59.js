
// Continue - executa o restante do código após o 'continue'.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    if (numero === 2) {
        console.log('Pulei o numero 2');
        continue;
    }
    console.log(numero);
}

// Break - interrompe o restante do código após o 'break'.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    console.log(numero);
    
    if (numero === 7) {
        console.log("7 encontrado, saindo...");
        break;
    }
}
