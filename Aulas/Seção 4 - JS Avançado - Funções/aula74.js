
// Aula 74 - Funções Imediatas (IIFE) - Immediately Invoked Function Expression

// function protegida
((idade, peso, altura) => {
    const sobrenome = 'Figueiredo';
    let criaNome = nome => nome + " " + sobrenome;
    let falaNome = () => console.log(criaNome("Vinicius"));
    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);

const nome = "Qualquer coisa";
