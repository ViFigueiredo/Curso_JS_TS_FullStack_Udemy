
// Aula 108 - Promises
// Utiliza-se quando precisamos retornar algo que não possui tempo definido de resposta

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {

    // construtor da Promise - recebe 2 par (true, false)
    return new Promise((resolve, reject) => {

        if (typeof msg !== 'string')
        // reject('BAD VALUE')
        reject( new Error('ERRO'));

        setTimeout(() => { // simula alguma coisa que leva tempo para retornar
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexão com o BD', rand(1, 3))
    .then(resposta => { // se True
        console.log(resposta);
        return esperaAi('Buscando dados...', rand(1, 3));
    })
    .then(resposta => { // se True
        console.log(resposta);
        return esperaAi(1111, rand(1, 3));
        // return esperaAi('Tratando dados...', rand(1, 3));
    })
    .then(resposta => { // se True
        console.log(resposta);
    })
    .then(() => { // se True
        console.log('Fim da promise');
    })
    .catch(e => { // se False
        console.log('ERRO: ', e);
    });

console.log('Executando junto com a promise.');

// Exemplo de callback
// function esperaAi(msg, tempo, cb){
//     setTimeout(() => {
//         console.log(msg);
//         if (cb) cb(); // retorna uma callback
//     }, tempo);
// }

// Problema - consome alto recurso devido a árvore de funções
// esperaAi('Frase 1', rand(1, 3), ()=> {
//     esperaAi('Frase 2', rand(1, 3), ()=> {
//         esperaAi('Frase 3', rand(1, 3));
//     });
// });