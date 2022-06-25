
// Aula 90 - Object.defineProperty() e Object.defineProperties()

// utilizado para se ter mais controle dos elementos de um obj, apesar de ser mais verboso

function Produto(nome, preco, estoque) {

    // configuração de uma única chave/valor
    Object.defineProperty(this, 'nome', {
        enumerable: true, // mostra a chave
        value: nome, // mostra valor
        writable: true, // permite alterar valores
        configurable: true // permite reconfigurar chaves e valores
    });
    
    // configuração de uma coleção de chave/valor
    Object.defineProperties(this, {
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // mostra valor
            writable: true, // permite alterar valores
            configurable: true // permite reconfigurar chaves e valores
        },
        estoque: {
            enumerable: true, // mostra a chave
            value: estoque, // mostra valor
            writable: true, // permite alterar valores
            configurable: true // permite reconfigurar chaves e valores
        }
    });

}
const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1);
// console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
}
