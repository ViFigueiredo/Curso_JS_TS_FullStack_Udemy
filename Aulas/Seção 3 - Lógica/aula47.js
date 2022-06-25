

// Switch e Case

const data = new Date('2021/12/30 00:00:00');
let diaSemana = data.getDay();
diaSemana = 7;
let diaSemanaTexto;

// diaSemana === 0 ? diaSemanaTexto = 'Domingo' : "";
// diaSemana === 1 ? diaSemanaTexto = 'Segunda' : "";
// diaSemana === 2 ? diaSemanaTexto = 'Terça' : "";
// diaSemana === 3 ? diaSemanaTexto = 'Quarta' : "";
// diaSemana === 4 ? diaSemanaTexto = 'Quinta' : "";
// diaSemana === 5 ? diaSemanaTexto = 'Sexta' : "";
// diaSemana === 6 ? diaSemanaTexto = 'Sábado' : "";

switch (diaSemana) {
    case 0: diaSemanaTexto = 'Domingo'; break;
    case 1: diaSemanaTexto = 'Segunda'; break;
    case 2: diaSemanaTexto = 'Terça'; break;
    case 3: diaSemanaTexto = 'Quarta'; break;
    case 4: diaSemanaTexto = 'Quinta'; break;
    case 5: diaSemanaTexto = 'Sexta'; break;
    case 6: diaSemanaTexto = 'Sábado'; break;
    default: diaSemanaTexto = "Não é dia!";
}

console.log(diaSemana, diaSemanaTexto);

// break - caso seja utilizado em funções, deve substituir pelo "return"

// deve utilizar quando possuimos varios "ifs" para um teste de mesma varável e precisamos ter um retorno se negativo