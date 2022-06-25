
// Aula 82 - Método Splice
// adiciona,  remove, separa e join elementos num método só
// sempre retorna array

// const.splice(indice, delete, elem1, elem2, elem3...)

//                 -4         -3       -2        -1
//                 0          1        2         3
const nomes = ['Vinicius', 'Lucas', 'Rafael', 'Davi'];

function removerPrimeiro(arr) { // shift()
    const removido = arr.splice(0, 1);
    console.log(arr, removido);
}
// removerPrimeiro(nomes);

function removerUltimo(arr) { // pop()
    const removido = arr.splice(ultimo, 1);
    console.log(arr, removido);
}
// removerUltimo(nomes);

function adicionarPrimeiro(arr) { // unshift()
    const adicionado = arr.splice(0, 0, 'adicionado');
    console.log(arr, adicionado);
}
// adicionarPrimeiro(nomes);

function adicionarUltimo(arr) { // push()
    const ultimo = arr.length;
    const adicionado = arr.splice(ultimo, 1, 'adicionado');
    console.log(arr, adicionado);
}
adicionarUltimo(nomes);