
// Aula 104 - Métodos de instância e estáticos

function teste(){ // também pode ser utilizado pela classe e estendida pela sua herança
    console.log('Posso ser utlizado!');
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    // Métodos de Instância - podem ser estendidos
    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático - não podem ser estendidos
    // não possui acesso aod dados da instância
    static trocaPilha() {
        console.log('OK, vou trocar!');
    }
}

const controle1 = new ControleRemoto('LG');
// controle1.aumentarVolume();
// controle1.aumentarVolume();
// controle1.aumentarVolume();
console.log(controle1);

//controle1.trocaPilha is not a function
// console.log(controle1.trocaPilha());

// ControleRemoto.trocaPilha();