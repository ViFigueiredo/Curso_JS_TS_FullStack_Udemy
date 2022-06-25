import validator from 'validator';

export default class EditarCadastrar {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');

        let error = false;

        if (nomeInput.value !== 'string') {
            alert('Nome inválido!');
            error = true;
        }

        if (sobrenomeInput.value !== 'string') {
            alert('Sobrenome inválido!');
            error = true;
        }

        if (!validator.isEmail(emailInput.value)) {
            alert('Email inválido! xxx@xxx.com');
            error = true;
        }

        if (telefoneInput.value !== 'string' || telefoneInput.value.length > 11) {
            alert('Telefone inválido! xx-xxxx-xxxx');
            error = true;
        }

        if (!error) el.submit();
    }
}