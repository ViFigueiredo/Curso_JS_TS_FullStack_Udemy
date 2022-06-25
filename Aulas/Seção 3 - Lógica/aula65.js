
// Aula 65 - setInterval e setTimeout

function mostraHora() {

    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// retorna alguma coisa com base em x, onde x representa um tempo em ms
const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

// finaliza alguma coisa com base em x, onde x representa um tempo em ms
setTimeout(function () {
    clearInterval(timer);
}, 5000);

setTimeout(function () {
    console.log('Finalizado!');
}, 5000);

