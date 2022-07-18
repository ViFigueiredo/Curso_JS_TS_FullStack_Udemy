
function CriaCalculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    };

    this.realizarConta = () => {
        try {
            const conta = eval(this.display.value);
            if (!conta) {
                alert('Conta invaálida!');
                return;
            }
            this.display.value = String(conta);
        } catch (e) {
            alert('Conta invaálida!');
            return;
        }
    };

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizarConta();
            }
        });
    },

        this.cliqueBotoes = () => {
            document.addEventListener('click', event => {
                const el = event.target;
                if (el.classList.contains('btn-num')) this.btnParaDisplay(el);
                if (el.classList.contains('btn-clear')) this.limparDisplay();
                if (el.classList.contains('btn-del')) this.limparUm();
                if (el.classList.contains('btn-eq')) this.realizarConta();
            });
        };

    this.btnParaDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    }
    this.limparDisplay = () => this.display.value = '';
    this.limparUm = () => this.display.value = this.display.value.slice(0, -1);
}

const calculadora = new CriaCalculadora();
calculadora.inicia();