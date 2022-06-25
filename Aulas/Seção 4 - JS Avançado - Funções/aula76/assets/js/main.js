
function criaCalculadora() {
    return {

        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        realizarConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if (!conta) {

                    alert('Conta invaálida!');
                    return;
                }
                this.display.value = String(conta);
            } catch (e) {
                alert('Conta invaálida!');
                return;
            }
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizarConta();
                }
            });
        },

        cliqueBotoes() {
            // this = calculadora
            // se utilizado arrow function - bloqueia alteração do this para dentro do seu proprio escopo - logo, não se utilizaria o .bind(this)
            document.addEventListener('click', function (e) {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.limparDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.limparUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizarConta();
                }

            }.bind(this));
        },

        limparDisplay() {
            this.display.value = '';
        },

        limparUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        btnParaDisplay(valor) {
            this.display.value += el.innerText;
            this.display.focus();
        },

    }
}
const calculadora = criaCalculadora();
calculadora.inicia();