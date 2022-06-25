
// Aula 89 - Revisando objetos

const pessoa1 = new Object();
pessoa1.nome = 'Vinicius';
pessoa1.sobrenome = 'Figueiredo';
pessoa1.idade = 28;
pessoa1.falarNome = () => `${pessoa1.nome} está falando.`;
pessoa1.getDataNascimento = () => {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - pessoa1.idade;
};

// console.log(pessoa1.falarNome());
// console.log(pessoa1.getDataNascimento());

// for (let key in pessoa1) console.log(key); // chaves
// for (let key in pessoa1) console.log(pessoa1[key]); // valores

//*********************************************************** */

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // congela a alteração da refentecia do this
}

const p1 = new Pessoa('Vinicius', 'Figueiredo');
const p2 = new Pessoa('Rebecka', 'Cybelle');

console.log(p1);
console.log(p2);