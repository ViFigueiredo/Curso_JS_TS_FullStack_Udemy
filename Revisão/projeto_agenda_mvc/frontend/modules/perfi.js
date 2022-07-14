
// default permite receber qualquer nome em uma nova instância (main.js)
export default class Perfil {
    constructor(file) {
        this.send = document.querySelector(file);
    }

    init() {
        this.events();
    }

    events() {
        if(!this.send) return;

        this.send.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e){
        const el = e.target;
        const fileInput = el.querySelector('input[name="user-img"]');
        const btnUpload = el.querySelector('input[name="upload"]');

        let error = false;

        if(!fileInput || btnUpload) {
            alert('Arquivo inválido!');
            error = true;
        }
        
        if (!error) el.submit();

    }

}