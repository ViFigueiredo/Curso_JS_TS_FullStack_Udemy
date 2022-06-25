const formulario = document.querySelector("form");

formulario.addEventListener("submit", function recebeEventoForm(e) {
  e.preventDefault();

  imprimirMsg();

  function capturarValores() {
    const inputPeso = e.target.querySelector(".peso");
    const inputAltura = e.target.querySelector(".altura");
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value) / 100; //em centímetros
    const valores = { peso, altura };
    return valores;
  }

  function calcularIMC(obj) {
    const imc = obj.peso / Math.pow(obj.altura, 2);
    return imc.toFixed(1);
  }

  function verificaDados(obj) {
    if (Number.isNaN(obj.peso) || Number.isNaN(obj.altura)) return true;
    if (obj.peso == "" || obj.altura == "") return true;
  }

  function validarMsg(n, elem) {
    const nivel = [
      "Abaixo do peso",
      "Peso normal",
      "Sobrepeso",
      "Obesidade grau 1",
      "Obesidade grau 2",
      "Obesidade grau 3",
    ];

    if (n < 18.5) {
      elem.style.background = "#f54242";
      return `IMC: ${n} => ${nivel[0]}`;
    }
    if (n >= 18.5 && n <= 24.9) {
      elem.style.background = "#42f56f";
      return `IMC: ${n} => ${nivel[1]}`;
    }
    if (n >= 25 && n <= 29.9) {
      elem.style.background = "#e9f542";
      return `IMC: ${n} => ${nivel[2]}`;
    }
    if (n >= 30 && n <= 34.9) {
      elem.style.background = "#f54242";
      return `IMC: ${n} => ${nivel[3]}`;
    }
    if (n >= 35 && n <= 29.9) {
      elem.style.background = "#f54242";
      return `IMC: ${n} => ${nivel[4]}`;
    }
    if (n >= 40) {
      elem.style.background = "#f54242";
      return `IMC: ${n} => ${nivel[5]}`;
    }
  }

  function imprimirMsg() {
    const valores = capturarValores();
    const seuIMC = calcularIMC(valores);
    const validarIMC = verificaDados(valores);
    let mensagem = document.querySelector(".resultado");
    let msg = "";
    if (validarIMC === true) {
      alert('Favor inserir dados válidos!');
      location.reload();
      // msg = "Dados Inválidos!";
      // mensagem.style.background = "#fff";
      // mensagem.innerHTML = msg;
    } else {
      msg = validarMsg(seuIMC, mensagem);
      mensagem.innerHTML = msg;
    }
  }
});
