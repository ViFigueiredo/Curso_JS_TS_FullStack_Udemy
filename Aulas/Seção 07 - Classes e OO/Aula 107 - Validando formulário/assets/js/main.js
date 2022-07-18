
class ValidaFormulario {

    constructor() {
        this.formulario = document.querySelector('.formulario'); // captura o <form>
        this.eventos(); // chama uma funcao raiz
    }

    eventos() {
        this.formulario.addEventListener('submit', e => { // add evento de click ao formaulario
            this.handleSubmit(e); // chama funcao após click
        })
    }

    handleSubmit(e) { // função após click
        e.preventDefault(); // restringe submit automatico de formulario
        const camposvalidos = this.camposSaoValidos(); // armazena retorno de uma funcao  - camposSaoValidos
        const senhasvalidas = this.senhasSaoValidas(); // armazena retorno de uma funcao - senhasSaoValidas

        if (camposvalidos && senhasvalidas) { // se todos os inputs forem válidos envia o formulario
            alert('Formulário enviado!');
            this.formulario.submit(); // envio de formulario
        }
    }

    senhasSaoValidas() { // valida os inputs de senha
        let valid = true; // chave de validacao

        const senha = this.formulario.querySelector('.senha'); // captura input senha
        const repetirSenha = this.formulario.querySelector('.repetir-senha'); // captura input repetir-senha

        if (senha.value !== repetirSenha.value) { // verifica se o conteudo dos campos de senha são iguais
            valid = false; // se IF true
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais.') // retorna mensagem de erro no input de senha
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais.') // retorna mensagem de erro no input de repetir-senha
        }

        if (senha.value.length < 6 || senha.value.length > 12) { // valida o tamanho do conteúdo dos inputs de senha
            valid = false; // se IF true
            this.criaErro(senha, 'Senha precisa ter entre 6 e 12 caracteres.'); // retorna msg de erro nos inputs de senhas
        }

        return valid; // true
    }

    camposSaoValidos() { // valida todos campos de inputs
        let valid = true; // chave de validacao
        for (let errorText of this.formulario.querySelectorAll('.error-text')) { // itera todas as divs de erro criaErro()
            errorText.remove(); // remove a div[]
        }
        for (let campo of this.formulario.querySelectorAll('.validar')) { // itera todos os imputs
            const label = campo.previousElementSibling.innerText; // retorna e armazena os elementos anteriores ao elemento atual
            if (!campo.value) { // se vazio
                this.criaErro(campo, `Campo "${label}" não pode estar em branco.`) // se campo vazio
                valid = false; // se IF true
            }

            if (campo.classList.contains('cpf')) { // se campo CPF estiver vazio retorna false
                if (!this.validaCPF(campo)) valid = false; // se IF true
            }

            if (campo.classList.contains('usuario')) { // se campo usuário estiver vazio retorna false
                if (!this.validaUsuario(campo)) valid = false; // se IF true
            }
        }

        return valid; // true
    }

    validaUsuario(campo) { // valida compo usuario
        const usuario = campo.value; // armazena conteudo do compo usuario
        let valid = true; // chave de validação

        if (usuario.length < 3 || usuario.length > 12) { // valida o tamanho do conteudo de usuario
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.'); // msg erro
            valid = false; // se IF true
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) { // valida caracteres inválidos - apenas letras (maisculas e minusculas e/ou numeros)
            this.criaErro(campo, 'Usuário precisa ter apenas letras e/ou números.'); // msg erro
            valid = false; // se IF true
        }

        return valid; // true
    }

    validaCPF(campo) { // valida campo cpf (arquivo validaCPF.js)
        const cpf = new ValidaCPF(campo.value);
        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.');
            return false;
        }
        return true;
    }

    criaErro(campo, msg) { // retorna uma div de erro
        const div = document.createElement('div'); // cria e armazena <div>
        div.innerHTML = msg; // insere uma msg em <div>
        div.classList.add('error-text'); // insere uma classe em <div>
        campo.insertAdjacentElement('afterend', div); // insere <div> e sua msg após um input
    }

}

const valida = new ValidaFormulario(); // chama a classe ValidaFormulario()