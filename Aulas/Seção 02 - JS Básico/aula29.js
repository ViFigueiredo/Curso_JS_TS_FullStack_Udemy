
// Aula 29 - Arrays

//               0       1        2  
const alunos = ['Luiz', 'Maria', 'João'];

alunos.length; // tamanho do array

alunos.unshift('Manoel'); // adiocio a elementos

alunos.push; // adiciona elementos ao final
//alunos[alunos.length] = 'Fábio';

alunos.pop(); // remove elemento no final

alunos.shift(); // remove elemento no inicio - espaço vazio

delete alunos[1]; // deleta o conteúdo do array no indice[i]

alunos.slice(inicio, fim) // fatia o array com base em [i], onde +i corresponde ao sentido "esquerda-direita" e -i ao sentido "direita-esquerda"

alunos instanceof Array; // verifica se está instanciando com array