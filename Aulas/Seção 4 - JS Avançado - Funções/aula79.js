
// Aula 79 - Função Recursiva - chama ela mesma

function Recursiva (max){
    if (max > 10) return;
    console.log(max);
    max++;
    Recursiva(max);
}

Recursiva(0);