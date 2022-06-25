
/*

Cálculo de validação de CPF

exemplo de CPF - 705.484.450-52

passo 1: remover os 2 ultimos numeros do cpf e pontuação e concacetar os números restantes, gerando um novo número - (52)

passo2: multiplicar cada numero restante por um indice que decrescente

X do primeiro digito removido (5)
cpf      7    0    5    4    8    4    4    5    0
indice x10 > x9 > x8 > x7 > x6 > x5 > x4 > x3 > x2
X = 237

Y do segundo digito removido (2)
cpf      7     0    5    4    8    4    4    5    0    5
indice x11 > x10 > x9 > x8 > x7 > x6 > x5 > x4 > x3 > x2
Y = 284

passo 3: obter a soma do resultado dessas multiplicações -> (7x10) + (0x9) + (5x8)...

passo 4: obter resultado da formula conforme digitos removidos

para X => 11 - (X % 11)
para Y => 11 - (Y % 11)

passo 5: concatenar passo1 + passo4X + passo4Y

passo 6: verificar se o resultado do passo 5 é igual ao valor original do cpf informado no inicio, se true, então o CPF é válido, se false, CPF inválido

*/

function ValidaCPF(cpfEnviado) { // recebe uma string de cpf

    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true, // permite ver no log
        get: function () { // chama a funcao anonima
            return cpfEnviado.replace(/\D+/g, ''); // remove pontuação e espaços
        }
    });
}

ValidaCPF.prototype.Valida = function () { // prototype de validacao

    if (typeof this.cpfLimpo === 'undefined') return false; // se cpf for igual a undefined
    if (this.cpfLimpo.length !== 11) return false; // se tamanho do cpf > 11
    if (this.isSequencia()) return false; // se todos digitos forem iguais

    const cpfParcial = this.cpfLimpo.slice(0, -2); // remove os 2 últimos digitos
    const digito1 = this.criaDigito(cpfParcial); // armazena digito 1
    console.log(digito1);
    const digito2 = this.criaDigito(cpfParcial + digito1); // armazena digito 2
    console.log(digito2);
    const novoCPF = cpfParcial + digito1 + digito2; // concatena 7 primeiros digitos com digito 1 e digito 2
    // console.log(novoCPF);
    return novoCPF === this.cpfLimpo; // retorna novo cpf
}

ValidaCPF.prototype.criaDigito = function (cpfParcial) { // prototype de criar digito

    const cpfArray = Array.from(cpfParcial); // converte string de cpf em array
    // console.log(cpfArray);
    let regressivo = cpfArray.length + 1; // aumenta o tamanho do array em 1
    // console.log(regressivo);
    const total = cpfArray.reduce((ac, val) => { // faz a multiplicacao de cada numero do cpf
        // console.log(regressivo, val, regressivo * val);
        ac += (regressivo * Number(val)); // acumula o valor de uma soma
        regressivo--; // decrementa o contator
        return ac; // retorna a soma
    }, 0);

    // console.log(total);

    let digito = 11 - (total % 11); // formula de validacao de digito de cpf
    // console.log(digito);
    return digito > 9 ? '0' : String(digito); // condição de validacao
}

ValidaCPF.prototype.isSequencia = function () { // prototype que verifica numeros sequenciais

    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length); // cria um numero com valores sequenciais iguais 111.111.111.11
    // console.log(sequencia === this.cpfLimpo);
    return sequencia === this.cpfLimpo; // verifica se numero sequencial é igual ao cpf original
}

const insiraCPF = '705.484.450-52'; // exemplo de CPF
const cpf = new ValidaCPF(insiraCPF); // retorna uma string de cpf
// console.log(cpf.cpfLimpo);
// console.log(cpf.Valida());

if (cpf.Valida()) { // se o retorno da string de cpf com protype valida()
    // console.log('CPF válido!'); // se válido
} else {
    // console.log('CPF inválido!'); // se inválido
}

