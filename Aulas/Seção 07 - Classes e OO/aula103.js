
// Aula 103 - Getters e Setters

const _velocidade = Symbol('velocidade');

class Carro {

    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        console.log('SETTER');
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }
    
    get velocidade() {
        console.log('GETTER');
        return this[_velocidade]; // uso de Symbol e Getter para inibir alteração de propriedades do obj
    }

    acelerar() {
        if (this.velocidade >= 100) return;
        this[_velocidade]++;
    }

    frear() {
        if (this.velocidade <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro(`Fusca`);
// for (let i = 0; i <= 101; i++) {
//     c1.acelerar();
// }

// console.log(c1);
c1.velocidade = 99; // tentativa de alteração da propriedade velocidade
console.log(c1.velocidade);