
// Loop While

function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10;

// 1 verifica a condição e 2 executa
while (rand !== 10) {
    console.log(rand);
}

console.log('#############')

// 1 executa e 2 verifica a condição
do {
    console.log(rand);
} while (rand !== 10);
