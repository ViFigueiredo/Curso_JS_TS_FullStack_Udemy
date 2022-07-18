
// Aula 92 - Métodos úteis para objetos

/*

Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescription(o, 'prop')
...(spread)

Já vimos:
Object.keys - retorna as chaves
Object.freeze - congela o obj
Object.defineProperties - define várias propriedades de obj
Object.defineProperty - define uma única propriedades de obj

*/

const produto = { nome: 'Caneca', preco: 1.8 };
// console.log(produto);

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // mostra as configurações de um obj/chave que podem ser manipuladas com Object.defineProperty()

// console.log(Object.values(produto)); // mostra os valores de cada chave/obj

console.log(Object.entries(produto)); // retorna um array de chaves/valores do obj - pode ser iteravel
for (let valor of Object.entries(produto)){
    console.log(valor[0], valor[1]);
}
// for (let [chave, valor] of Object.entries(produto)){
//     console.log(chave, valor);
// }


// const caneca = produto; // possui mesma referencia
const caneca = {
    ...produto,
    material: 'porcelana'
}; // referencia diferente
caneca.nome = 'Outro nome';
caneca.preco = 2.5;
// console.log(caneca);

const outroProduto = Object.assign({}, produto, { material: 'porcelana' }); // copia um obj sem manter a referencia
outroProduto.nome = 'Outro nome';
outroProduto.preco = 2.5;
// console.log(outroProduto);

const outroObjManual = { nome: produto.nome, preco: produto.preco, material: 'porcelana'}; // menos utilizado
// console.log(outroObjManual);



