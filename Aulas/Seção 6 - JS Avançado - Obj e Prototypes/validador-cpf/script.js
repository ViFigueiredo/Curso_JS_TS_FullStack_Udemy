
const inputCPF = document.querySelector('input');
const botaoValidar = document.querySelector('button');
const spanValidar = document.querySelector('span');

botaoValidar.addEventListener('click', () => {
    if (inputCPF.value === '') return;
    main();
});

document.addEventListener('keypress', (e) => {
    if (inputCPF.value === '') return;
    if (e.key === 'Enter') return main()
    if (e.key === 'Enter') return main()
});

function limparInput (){
    inputCPF.value = '';
    inputCPF.focus();
}

function main() {
    const cpfInserido = String(inputCPF.value).replace(/\D+/g, '');
    const cpfLimpo = limpaCPF(cpfInserido);
    const digito1 = criaDigito(cpfLimpo);
    const digito2 = criaDigito(cpfLimpo + digito1);
    const novoCPF = cpfLimpo + digito1 + digito2;
    const cpfValidado = validaCPF(cpfInserido, novoCPF);
    limparInput();
    spanValidar.style.display = 'flex';
    spanValidar.innerText = mensagemValidacao(cpfValidado, inputCPF);
}

function mensagemValidacao(bool, cpf) {
    if (bool === true) return `CPF ${cpf.value} é válido!`;
    if (bool === false) return `CPF ${cpf.value} é inválido!`;
}

function validaCPF(cpfOriginal, cpfGerado) {
    if (typeof cpfGerado === 'undefined') return false;
    if (cpfGerado.length !== 11) return false;
    if (ehSequencial(cpfGerado)) return false;
    return cpfOriginal === cpfGerado;
}

function ehSequencial(cpf) {
    const sequencia = cpf[0].repeat(cpf.length);
    return sequencia === cpf;
}

function limpaCPF(cpf) {
    const cpfLimpo = cpf.slice(0, -2);
    return cpfLimpo
}

function criaDigito(cpf) {
    const arrayDeCPF = Array.from(cpf);
    let regressivo = arrayDeCPF.length + 1;
    const somaMultiplicaoValores = arrayDeCPF.reduce((acumulador, valor) => {
        acumulador += regressivo * Number(valor);
        regressivo--;
        return acumulador;
    }, 0);
    let digito = 11 - (somaMultiplicaoValores % 11);
    return digito > 9 ? '0' : String(digito);
}
