let safe = () => {
const hora = document.querySelector('.hora');

let segundos = 0;
let timer;

document.addEventListener('click', function(e) {

    let elemento = e.target;

    if (elemento.classList.contains('iniciar')) {
        iniciarTimer();
    }
    if (elemento.classList.contains('pausar')) {
        pausarTimer();
    }
    if (elemento.classList.contains('reiniciar')) {
        reiniciarTimer()
    }
});

function criaHoraDosSegundos(segundos) {
    const h = new Date(segundos * 1000); // retorna uma data e hora em ms desde 01/01/1970
    return h.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

function iniciarTimer() {
    timer = setInterval(function () {
        segundos++;
        hora.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000)
    hora.style.color = 'green';
}

function pausarTimer() {
    setTimeout(function () {
        clearInterval(timer);
    }, 0)
    hora.style.color = 'red';
}

function reiniciarTimer() {
    segundos = 0;
    pausarTimer();
    hora.innerHTML = "00:00:00";
    hora.style.color = 'black';
}}
safe();
