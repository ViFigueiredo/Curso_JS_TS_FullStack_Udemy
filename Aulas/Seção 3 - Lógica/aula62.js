
// Exercícios Lógica de Programação 3 - Escreva uma função "fizzBuzz" que recebe um numero e retorne o seguinte:
// Se divisível por 3: Fizz
// Se divisível por 5: Buzz
// Se divisível por 3 e 5: FizzBuzz
// Se NÂO divisível por 3 e 5: retorna o próprio número
// Se NÂO é number: retorna o próprio número
// Usar função com números de 0 a 100

let fizzBuzz = numero => {

    if (isNaN(numero)) return "é NaN";
    if (numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz";
    if (numero % 3 === 0) return "Fizz";
    if (numero % 5 === 0) return "Buzz";
    return "é indivisível";
}

console.log("string", fizzBuzz("string"));
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}




