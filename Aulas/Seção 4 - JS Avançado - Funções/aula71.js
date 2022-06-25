
// Aula 71 - Escopo Léxico

const nome = 'Luiz';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Otávio'; // só pertence ao escopo dessa função porém nunca foi utiliza já que a função falaNome não acessa esta função, pelo contrário, utiliza a apenas variáveis globais.
    falaNome();
}
usaFalaNome();
