
// Atribuição por desestruturação - Array

const pessoa = {
    nome: 'Vinicius',
    sobrenome: 'Figueiredo',
    idade: '28',
    endereco : {
        rua: 'Itambé',
        numero: '127D'
    }
};

// atribuição via desestruturação de obj
const { nome, sobrenome, idade = 'Não existe' } = pessoa;
console.log(nome, sobrenome, idade);

// também podemos especificar a chave e alterar seu valor e caso não exista assumir um valor padrão "Victor"
const { nome: n = 'Victor' } = pessoa;
console.log(n);

// para acessar obj dentro de outro obj, usamos:
const { endereco: { rua, numero } } = pessoa;
console.log(rua, numero);

// utilizando REST
const { outroNome, ...resto } = pessoa;
console.log(outroNome, resto);