
const campData = document.querySelector(".data");

const data = new Date();
campData.innerHTML = criarData(data);
campData.style.textAlign = "center";

function getDiaSemanaTexto (diaSemana){

    const diasSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];

    return diasSemana[diaSemana];
}

function getNomesMes (numeroMes){

    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return meses[numeroMes];
}

function zeroAEsquerda (num) {

    return num >= 10 ? num : `0${num}`;
}

function criarData (data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomesMes(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} às ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    )    
}