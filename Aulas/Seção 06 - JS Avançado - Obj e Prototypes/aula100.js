
// Aula 100 - Factory Functions + Prototypes

// Composição - Mixing
const falar = {
    falar() {
        console.log(`${this.nome} está falando...`);
    }
}

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo...`);
    }
}

const comer = {
    comer() {
        console.log(`${this.nome} está comendo...`);
    }
}

// const pessoaProtype = {...falar, ...beber, ...comer}; // alt 1
const pessoaProtype = Object.assign({}, falar, beber, comer); // alt 2


/********************************************************************** */

function criaPessoa(nome, sobrenome) {

    // const pessoaProtype = {

    //     falar() {
    //         console.log(`${this.nome} está falando...`);
    //     },

    //     beber() {
    //         console.log(`${this.nome} está bebendo...`);
    //     },

    //     comer() {
    //         console.log(`${this.nome} está comendo...`);
    //     }
    // }

    return Object.create(pessoaProtype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const p1 = criaPessoa('Vinicius', 'Figueiredo');
const p2 = criaPessoa('Rebecka', 'Cybelle');

console.log(p1);
console.log(p2);