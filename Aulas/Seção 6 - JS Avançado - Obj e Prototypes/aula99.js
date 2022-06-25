// Aula 99 - Polimorfismo

// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = String(agencia);
    this.conta = String(conta);
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    console.log(`Saque de R$${valor}`);
    this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    console.log(`Depósito de R$${valor}`);
    if (this.limite > 0) {
        console.log(`Cheque-especial: R$${this.limite}`);
    }
    this.verSaldo();
};

Conta.prototype.verSaldo = function () {
    console.log(`Ag/Cc: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo} \n`);
};

let ag, cb, saldoInicial, ce;

/***************************************** CORRENTE *************************************************** */
console.log('*****CORRENTE*****');
function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;
ContaCorrente.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        this.saldo -= valor;
        console.log(`Saque de R$${valor}`);
        console.log(`Cheque-especial atingido! R$${valor}`);
        this.verSaldo();
        return;
    }
    if (valor > this.saldo) {
        this.saldo -= valor;
        this.limite -= valor;
        console.log(`Saque de R$${valor}`);
        console.log(`Cheque-especial: R$${this.limite}`);
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.limite -= valor;
    console.log(`Saque de R$${valor}`);
    console.log(`Cheque-especial: R$${this.limite}`);
    this.verSaldo();
};

ag = 11, cb = 22, saldoInicial = 0, ce = 100;
const cc = new ContaCorrente(ag, cb, saldoInicial, ce);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

/***************************************** POUPANÇA *************************************************** */
console.log('*****POUPANÇA*****');
function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

ag = 22, cb = 33, saldoInicial = 0;
const pp = new ContaPoupanca(ag, cb, saldoInicial);
pp.depositar(10);
pp.sacar(10);
pp.sacar(1);