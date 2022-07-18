
// Aula 69 - Parâmetros da função

// arguments - argumento chave que toda função JS possui implicita (não funciona em arrow function)
// armazena todo valor quando a função não possui argumentos definidos
function funcao () {
    let total  = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}
funcao (1,2,3,4,5,6,7,8,9,10);

// argumentos vazios recebem automaticamente undefined como valor
function funcao (a,b,c,d,e,f) {
    console.log(a,b,c,d,e,f);
}
funcao (1,2,3);

// argumento com valor predefinido = valor padráo se nulo
// para pular argumentos deve-se usar undefined => a=2 b=2 c=4 => 24
// null = 0 => a=2 c=20 => 220
function funcao2 (a, b = 2, c = 4) {
    console.log(a+b+c);
}
funcao2(2, undefined, 20);

// argumentos com atribuição por desestruturação de array/obj
function funcao3 ([valor1,valor2,valor3]) {
    console.log(valor1,valor2,valor3);
}
funcao3(['Vinicius','Belesa','Figueiredo']);

// operando REST precisa SEMPRE ser o último
function funcao4 (operador, acumulador, ...numeros) {
    
    for( let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }

    console.log(acumulador);
}
funcao4 ('+', 0, 5,10,15,20);


