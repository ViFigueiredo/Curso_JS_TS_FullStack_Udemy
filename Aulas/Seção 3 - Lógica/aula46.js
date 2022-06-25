
// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 timestamp unix ou época unix
// const data2 = new Date(2019, 3); // a, m, d, h, M, s, ms

const data = new Date();
console.log('Dia: ', data.getDate());
console.log('Mês: ', data.getMonth() + 1); // 0 - janeiro
console.log('Ano: ', data.getFullYear());
console.log('Hora: ', data.getHours());
console.log('Minuto: ', data.getMinutes());
console.log('Segundo: ', data.getSeconds());
console.log('Milissegundo: ', data.getMilliseconds());
console.log('Dia da semana: ', data.getDay()); // 0 - domingo 6 - sabado
console.log(data.toString());    

// console.log(Date.now());

// Formatar uma data

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);