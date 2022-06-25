// Primeira parte - objetos (básico)

/* const nome01 = 'Jairo';
const sobrenome01 = 'Silva'
const idade01 = 33;

const nome02 = 'Nicolas';
const sobrenome02 = 'Miranda'
const idade02 = 24; */

const pessoa1 = {
    nome : 'Jairo',
    sobrenome : 'Silva',
    idade : '33'
};

const pessoa2 = {
    nome : 'Nicolas',
    sobrenome : 'Miranda',
    idade : '24'
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);



// Segunda parte - factory function e Objetos - função que cria objetos

let criaPessoa = (nome,sobrenome,idade) => {

    // return {
    //     nome : nome,
    //     sobrenome : sobrenome,
    //     idade : idade
    // }

    return { nome, sobrenome, idade }
};

const pessoa1 =  criaPessoa("Vinicius", "Figueiredo", 27);
console.log(pessoa1);

// Terceira parte - funcoes como metodos de objetos
// this - referencia o próprio objeto

const pessoa1 = {
    nome: 'Vinicius',
    sobrenome: 'Belesa de Figueiredo',
    idade: 27,
    falarNome() {
        console.log(
            `Me chamo ${this.nome} ${this.sobrenome} e possuo ${this.idade} anos.`
        )
    }
};

pessoa1.falarNome();
