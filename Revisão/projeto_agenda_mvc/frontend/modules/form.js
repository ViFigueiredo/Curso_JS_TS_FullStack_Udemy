import validator from "validator";

// default permite receber qualquer nome em uma nova instância (main.js)
export default class Form {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events(); // inicializa todos os eventos disponíveis
    }

    events() {
        if(!this.form) return;// caso não exista envio de formulário 

        this.form.addEventListener('submit', e => {
            e.preventDefault(); // não envia formulário
            // alert('Formulário não enviado!');

            this.validate(e);
        });
    }

    validate(e){
        const el = e.target;
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');

        // console.log(emailInput.value, passwordInput.value);

        let error = false;

        if(!validator.isEmail(emailInput.value)) {
            alert('E-mail inválido!');
            error = true;
        }

        if(passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            alert('Senha precisa ter entre 3 e 50 caracteres!');
            error = true;
        }
        
        if (!error) el.submit();

    }

}