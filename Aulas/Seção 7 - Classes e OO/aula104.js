
// Aula 104 - Herança com classes

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' já ligado.');
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' já desligado.');
            return;
        }

        this.ligado = false;
    }
}

// const d1 = new DispositivoEletronico('Smartphone');
// d1.ligar();
// d1.desligar();
// d1.desligar();
// console.log(d1);

// estende toda configuracao da classe DispositivoEletronico
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo){
        super(nome); // estende o constructor da classe pai 
        this.cor = cor;
        this.modelo = modelo;
    }
};

const s1 = new Smartphone('iPhone', 'Preto', 'XS');
// s1.ligar();
// s1.ligar();
// console.log(s1);

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi){
        super(nome); // estende o constructor da classe pai 
        this.temWifi = temWifi;
    }

    // sobreescreve o método ligar da classe pai
    ligar() {
        console.log('Olha, você alterou o método ligar!');
    }
};

const t1 = new Tablet('iPad', true);
// console.log(t1.ligado);
// console.log(t1);
t1.ligar();
t1.ligar();