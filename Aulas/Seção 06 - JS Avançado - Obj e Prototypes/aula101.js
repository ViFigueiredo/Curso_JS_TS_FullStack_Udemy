
// Aula 101 - Objeto Map()

// Problema: 
// receber de uma API um obj contendo um ID/Nome
//inserir em um novo obj de ordem decrescente
// { number => {id:number, nome:'string'} }

const pessoas = [
    { id: 3, nome: 'Vinicius' },
    { id: 2, nome: 'Rebecka' },
    { id: 1, nome: 'Malu' },
];


// solucao
const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa }); // setar valor no map()
}

// const novasPessoas = {}; // ex1 e 2

// ex 2
// for (const pessoa of pessoas) {
//     const {id} = pessoa;
//     novasPessoas[id] = {...pessoa};
// }

// ex 1
// for (const { id, nome } of pessoas) {
//     novasPessoas[id] = { id, nome }
// }

// obs - neste método o JS retorna um novo obj porém os ID são convertidos em string e os obj em ordem crescente

console.log(novasPessoas);
console.log(); // quebra de linha do console
console.log(novasPessoas.get(2)); // obter valor do map()

// Extra
// new Map() retorna um array iteravel muito utilizado em python porém pouco em JS

console.log();
for (const [identifier, { id, nome}] of novasPessoas){
    console.log(identifier,id,nome);
}