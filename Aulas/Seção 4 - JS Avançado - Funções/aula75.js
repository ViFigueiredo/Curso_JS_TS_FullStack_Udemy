
// Aula 75 - Factory Function - Função que retorna objetos

// factory function - function () return obj
// constructor function - function (new) return obj

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // Getter - torna a o retorno de uma função um atributo do obj
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(str){
            str = str.split(" ");
            this.nome = str.shift();
            this.sobrenome = str.join(" ");
            // console.log(str);
        },
        
        fala(assunto = 'falando sobre NADA') {
            return `${this.nome} está ${assunto}!`
        },

        altura,
        peso,

        // Getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }

}

const p1 = criaPessoa('Vinicius', "Figueiredo", 1.73, 80);
const p2 = criaPessoa('Davi', "Figueiredo", 1.60, 80);
const p3 = criaPessoa('Rafael', "Figueiredo", 1.75, 80);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);
// p1.nomeCompleto = 'Maria Aparecida Belesa'
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.nomeCompleto);
// console.log(p1.fala());
