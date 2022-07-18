
// Aula 91 - Getters e Setters com funções construtoras

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque; // atribui um parametro a uma variável e evita loop ao executar o método
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function () { // intercepta 
            return estoquePrivado;
        },
        set: function (valor) { // manipula
            if (typeof valor !== 'number') { // valida o tipo de dado
                // console.log('Bad value.');
                throw new TypeError('Mensagem...') // mensagem se erro
                return; // stop
            }
            estoquePrivado = valor; // altera conteudo da variavel
        }
    });
}

// const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1);
// p1.estoque = 500;
// console.log(p1.estoque);


/********************************************************* */

function criaProduto(nome) {
    return {
        get nome() {
            return nome; // intercepta a propriedade do obj
        },
        set nome(valor) {
            valor = valor.replace('coisa', ''); // altera o valor da propriedade
            nome = valor;
        }
    };
}

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa';
console.log(p2.nome);