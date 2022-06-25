// Aula 95 - Herança

// Exemplificando um e-commerce
// Produto => aumento, desconto
// Camiseta => cor
// caneca => material

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// podemos utlizar ()=>
// não permite 
Produto.prototype.aumento = function (quantia) { this.preco += quantia }; // prototype/produto para aumento de preco
Produto.prototype.desconto = function (quantia) { this.preco -= quantia }; // prototype/produto para desconto de preco

// retorna a heranca de produto() para camiseta()
// herda tudo de produto porém pode ter caracteristicas próprias
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor; // caracteristica própria
}

// Camiseta.prototype = Produto.prototype - NÃO FUNCIONA - SOLUÇÃO ABAIXO:
Camiseta.prototype = Object.create(Produto.prototype); // delega o prototype de Produto para Camiseta
Camiseta.prototype.constructor = Camiseta; // altera o nome do construtor de Produto para Camiseta

// Outro exemplo - sobrescrever prototype.aumento utilizando %
Camiseta.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

// Outro exemplo - produto caneca
function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function () {
            return estoque;
        },
        set: function (valor) {
            if (typeof valor !== 'number') return; // apenas valores numbers serão validados
            estoque = valor;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('regata', 7.5, 'preta'); // criação do produto - camiseta
const caneca = new Caneca('caneca', 17.45, 'porcelana', 5);

// console.log(produto);
// console.log(camiseta);
console.log(caneca);
console.log(caneca.estoque);