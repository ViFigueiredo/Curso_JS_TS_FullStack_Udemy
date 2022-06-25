const mongoose = require('mongoose'); // módulo de conexão ao banco
const validator = require('validator'); // módulo de validação emails
const bcryptjs = require('bcryptjs'); // módulo de hash de senhas 

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

/*************************** */

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async register() {
        this.valida();
        if (this.errors.length > 0) return;

        await this.userExists(); // checa se usuario já existe
        if (this.errors.length > 0) return; // veririca o [errors]

        const salt = bcryptjs.genSaltSync(); // necessario para criar hash
        this.body.password = bcryptjs.hashSync(this.body.password, salt); // cria a hash

        // invoca o input do obj this.body no BD
        this.user = await LoginModel.create(this.body);
    }

    async login() {
        this.valida();
        if (this.errors.length > 0) return;

        this.user = await LoginModel.findOne({ email: this.body.email });

        if (!this.user) {
            this.errors.push('Usuário não existe!')
            return;
        }

        if (!bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.errors.push('Senha inválida!');
            this.user = null;
            return;
        }

    }

    valida() {

        this.cleanUp();

        // o-email precisa ser válido
        if (!validator.isEmail(this.body.email))
            this.errors.push('E-mail inválido!');

        // senha precisa ter entre 3 e 50
        if ((this.body.password.length < 3) || (this.body.password.length > 50))
            this.errors.push('A senha precisa ter entre 3 e 50 caracteres!');
    }

    // verifica se o conteudo coletado do form é uma string, caso contrario converte em uma string vazia
    cleanUp() {

        for (let key in this.body) {
            if (typeof this.body[key] !== 'string')
                this.body[key] = '';
        }

        // modela o obj que será passado ao BD
        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }

    async userExists() {
        this.user = await LoginModel.findOne({ email: this.body.email });
        if (this.user) this.errors.push('Usuário já existe!')
    }
}

module.exports = Login;