
// Aula 77 - Constructor Function - Função que retorna objetos

// factory function - function () return obj
// constructor function - function (new) return obj

function Pessoa(nome, sobrenome) {

    // Atributos ou métodos privados
    const ID = 123456789;
    const metodoInterno = () => {
        
    };

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    };
   
}

const p1 = new Pessoa('Vinicius', 'Figueireedo');
const p2 = new Pessoa('Rebecka', 'Cybelle');

console.log(p1.nome);
console.log(p1.sobrenome);
p1.metodo();