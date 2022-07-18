
// Aula 85 - Mapeando arrays
// Sempre possui o tamanho do array original
// Pode alterar o array original ou criar outro

// Dobrar os números
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor *2);
// console.log(numerosEmDobro);


// Para cada elemento:
// 01- Retonar apenas uma string com o nome da pessoa
// 02- Remova apenas a chave "nome" do obj
// 03- Adicione uma chave id em cada obj

const pessoas = [
    { nome: 'Vinicius', idade: 28},
    { nome: 'Lucas', idade: 22},
    { nome: 'Rafael', idade: 16},
    { nome: 'Davi', idade: 10},
];

const apenasNomes = pessoas.map(obj => obj.nome); // 01
// console.log(apenasNomes);

//Faz-se uso dos parenteses para se converter em chave de obj sem declarar o obj
const deleteNomes = pessoas.map(obj => ({idade: obj.idade})); // 02
// console.log(deleteNomes);

const idObj = pessoas.map((obj, indice) => {
    const newObj = {...obj};
    newObj.id = (indice +1) *1000;
    return newObj;
});

console.log(idObj);



