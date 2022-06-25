
// Aula 73 - Callback -  função passada a outra função como argumento, que é então, invocado dentro da função externa para completar algum tipo de rotina ou ação.

// USO - normalmente utlizado em sistemas de requisicao de resposta, como em login de usuário, consulta de dados, etc

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min
    return Math.floor(num);
}

console.log(rand());

function f1(Callback) {
    setTimeout(() => {
        console.log('f1');
        if (Callback) Callback();
    }, rand());
}

function f2(Callback) {
    setTimeout(() => {
        console.log('f2');
        if (Callback) Callback();
    }, rand());
}

function f3(Callback) {
    setTimeout(() => {
        console.log('f3');
        if (Callback) Callback();
    }, rand());
}

f1(() => f2(() => f3(() => console.log("Olá mundo!"))));