
// Aula 109 - Métodos úteis para Promises

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {

    // construtor da Promise - recebe 2 par (true, false)
    return new Promise((resolve, reject) => {
        setTimeout(() => { // simula alguma coisa que leva tempo para retornar
            if (typeof msg !== 'string') {
                reject('Caí no erro!');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return; // redundante
        }, tempo);
    });
}

// Promisse.all - retorna uma única Promise que resolve quando todas as promises no argumento iterável forem resolvidas ou quando o iterável passado como argumento não contém promises. É rejeitado com o motivo da primeira promise que foi rejeitada.

// Promisse.race -  retorna uma promise que resolve ou rejeita assim que uma das promises no iterável resolver ou rejeitar, com o valor ou razão daquela promise.

// Promisse.resolve - retorna um objeto Promise que é resolvido com o valor passado. Se o valor for thenable (ex: tiver um método "then"), a promise retornada irá "seguir" esse thenable, adotando seu estado final; se o valor for uma promise, o objeto será o resultado da chamada Promise.resolve; do contrário a promise será realizada com o valor.

// Promisse.reject - retorna um objeto Promise que é rejeitada com um dado motivo.

const promises = [
    // 'Primeiro valor',
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    esperaAi(1000, rand(1, 5)),
    // 'Outro valor'
]

Promise.race(promises)
    .then(function (valor) {
        // console.log(valor);
    })
    .catch(function (erro) {
        // console.log(erro);
    });

/************************************************************************** */

function baixaPagina() {
    const emCache = true;

    if (emCache) {
        return Promise.reject('Página em cache!');
    } else {
        return esperaAi('Baixando a página...', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO '+ e));
