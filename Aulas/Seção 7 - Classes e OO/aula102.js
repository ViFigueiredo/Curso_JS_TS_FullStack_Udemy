
// Aula 102 - Criando Classes

// Exemplo - Classe
class Pessoa {

    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // já está sendo invocado no proto da classe sem a necessidade de criar o prototype do método
    falar() {
        console.log(`${this.nome} está falando.`);
    }
}

const p1 = new Pessoa('Vinicius', 'Figueiredo');
console.log(p1);
console.log(p1.falar());

// Exemplo - Função Construtora
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
    console.log(`${this.nome} está falando.`);
}

const p2 = new Pessoa2('Rebecka', 'Cybelle');
console.log(p2);


