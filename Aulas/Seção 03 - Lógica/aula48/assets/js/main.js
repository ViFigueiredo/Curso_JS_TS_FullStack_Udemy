
// capturar area de insercao de data
const campData = document.querySelector(".data");
console.log(campData);

const data = new Date();
const dataCriada = criarData(data); // obj com elementos da data
const formataDiaSemana = verificaDiaSemana(dataCriada); // dia da semana em texto
const formataMes = verificaMes(dataCriada); // mês em texto
const dataImpressa = formatarData(dataCriada,formataDiaSemana, formataMes); // formata a data
campData.innerHTML = dataImpressa;
campData.style.textAlign = "center";

function criarData (data) {
    const diaSemana = data.getDay();
    const dia = zeroAEsquerda(data.getDate());
    const mes = data.getMonth();
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());

    const obj = {dia,diaSemana,mes,ano,hora,minuto};
    console.log(obj);
    return obj;    
}

function verificaDiaSemana (obj) {

    let diaSemanatexto = '';
    switch (obj.diaSemana) {
        case 0: diaSemanatexto = 'Domingo'; break
        case 1: diaSemanatexto = 'Segunda-Feira'; break
        case 2: diaSemanatexto = 'Terça-Feira'; break
        case 3: diaSemanatexto = 'Quarta-Feira'; break
        case 4: diaSemanatexto = 'Quinta-Feira'; break
        case 5: diaSemanatexto = 'Sexta-Feira'; break
        case 6: diaSemanatexto = 'Sábado'; break
        default: diaSemanatexto = 'Dia inválido'; break
    }

    return diaSemanatexto;
}

function verificaMes (obj) {

    let mesTexto = '';
    switch (obj.mes) {
        case 0: mesTexto = 'Janeiro'; break
        case 1: mesTexto = 'Fevereiro'; break
        case 2: mesTexto = 'Março'; break
        case 3: mesTexto = 'Abril'; break
        case 4: mesTexto = 'Mario'; break
        case 5: mesTexto = 'Junho'; break
        case 6: mesTexto = 'Julho'; break
        case 7: mesTexto = 'Agosto'; break
        case 8: mesTexto = 'Setembro'; break
        case 9: mesTexto = 'Outubro'; break
        case 10: mesTexto = 'Novembro'; break
        case 11: mesTexto = 'Dezembro'; break
        default: mesTexto = 'Mês inválido'; break
    }

    return mesTexto;
}

function formatarData (obj, strDia, strMes) {

    const diaSemana = strDia;
    const mes = strMes;
    return`${diaSemana}, ${obj.dia} de ${mes} de ${obj.ano} às ${obj.hora}:${obj.minuto}`;
}

function zeroAEsquerda (num) {

    return num >= 10 ? num : `0${num}`;
}