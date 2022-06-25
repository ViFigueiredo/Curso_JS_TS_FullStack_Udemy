
// Aula 94 - Manipulando Prototypes

// LITERAIS

// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};

const objB = {
    chaveB: 'B'
    // __proto__: Object.prototype
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA); // linka o __proto__ de B ao de A
Object.setPrototypeOf(objC, objB); // linka o __proto__ de C ao de B
// console.log(objC.chaveA); // log do proto de C linkado ao de B


// TRABALHANDO COM CONSTRUTORES

function Produto(nome, preco){ // função construtora
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}; // cria um prototype que retorno um metodo desconto 

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}; // cria um prototype que retorno um metodo aumento

const p1 = new Produto('Camiseta', 50); // envia os parâmetros para o prototype de Produto
// p1.desconto(100);
// p1.aumento(100);
// console.log(p1);

const p2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype); // atribui ao obj literal todos os métodos/prototypes(desconto, aumento)
p2.aumento(10);
// console.log(p2);

const p3 = Object.create(Produto.prototype); // cria e atribui ao obj literal todos os métodos/prototypes(desconto, aumento)
p3.preco = 113; // seta o valor inicial da chave preco que irá receber o prototype aumento/desconto
p3.aumento(10);
// console.log(p3);

// opcional
const p4 = Object.create(Produto.prototype, { // é possível dentro do prototype configurar o "defineProperty()"
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99,
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42,
    },
});
p4.aumento(10);
// console.log(p4);