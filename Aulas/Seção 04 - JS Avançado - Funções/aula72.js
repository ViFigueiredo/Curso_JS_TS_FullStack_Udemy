
// Aula 72 - Closures - habilidade de acessar conteúdos fora do seu escopo léxico

function retornaFuncao(nome){
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());