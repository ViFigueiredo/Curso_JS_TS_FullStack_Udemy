
function safe() {

    // capturando elemento HTML
    let conteudoTarefa = document.querySelector('.inserirTarefa');
    let criarTarefa = document.querySelector('.criarTarefa');

    // add evento de click no botao de criar tarefa
    criarTarefa.addEventListener('click', function () {
        // console.log(conteudoTarefa.value);
        main(conteudoTarefa.value);
    })

    // add evento de tecla ENTER no input de texto
    conteudoTarefa.addEventListener('keypress', function (e) {
        if (e.keyCode === 13) { // ENTER possui keypress 13
            // console.log(conteudoTarefa.value);
            if (!conteudoTarefa.value) return;
            main(conteudoTarefa.value);
        };
    })

    // função nó
    function main() {
        if (!conteudoTarefa.value) return;
        inserirTarefaNaLista(conteudoTarefa.value);
        limparInput(); //força o input a receber uma nova informação
        salvarTarefas();
    }

    // limpa o input de texto e já espera uma nova informação
    function limparInput() {
        conteudoTarefa.value = "";
        conteudoTarefa.focus();
    }

    // captura o elemento HTML responsável por receber novas tarefas
    function capturaUL() {
        let listaTarefas = document.querySelector('.listaTarefas');
        return listaTarefas;
    }

    // cria uma DIV que encapsula a tarefa e o botão de apagar
    function criaDIV() {
        let tarefaWraper = document.createElement('div');
        return tarefaWraper;
    }

    // cria LIs que receberão uma string de tarefa
    function criaLI() {
        let tarefa = document.createElement('li');
        return tarefa;
    }

    // cria BTN que permite apagar a tarefa da LI
    function criaBTN() {
        let btnTarefa = document.createElement('button');
        return btnTarefa;
    }

    // executa o DELETE da DIV + LI + BTN de cada tarefa
    function removerTarefa(btn, div) {
        btn.addEventListener('click', function () {
            div.parentNode.removeChild(div);
            salvarTarefas();
        })
    }

    // cria uma varivel que recebe como valor elementos HTML
    function adicionarElemento(ul, div, li, btn) {
        ul.appendChild(div);
        div.appendChild(li);
        div.appendChild(btn);
    }

    // adiciona classes CSS ao elementos HTML criados anteriormente
    function adicionarClasse(div, btn) {
        div.setAttribute('class', 'tarefaWraper');
        btn.setAttribute('class', 'apagarTarefa');
    }

    // insere uma string referente a tarefa e ao botão de apagar
    function inserirNoHTML(str, li, btn) {
        li.innerHTML = str;
        btn.innerHTML = "Apagar";
    }

    // insere a tarefa no HTML chamandos as funções que executam cada parte do processo
    function inserirTarefaNaLista(str) {
        let ul = capturaUL();
        let div = criaDIV();
        let li = criaLI();
        let btn = criaBTN();

        adicionarClasse(div, btn);
        adicionarElemento(ul, div, li, btn);
        inserirNoHTML(str, li, btn);
        removerTarefa(btn, div);
    }

    // cria uma array e salva as tarefas nele
    function salvarTarefas() {
        let tarefasAtivas = document.querySelectorAll('.tarefaWraper');
        // console.log(tarefasAtivas);
        const listaDeTarefas = [];

        // remove o texto do botao apagar por espaços vazios e em seguida remove esses espaços vazios antes de adicionar ao array
        for (let tarefa of tarefasAtivas) {
            // console.log(tarefasAtivas[tarefa]);
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('Apagar', "").trim();
            // console.log(tarefaTexto);
            listaDeTarefas.push(tarefaTexto);
        }

        // console.log(listaDeTarefas);

        const tarefasJSON = JSON.stringify(listaDeTarefas); // converte o array em uma JSON/String
        // console.log(tarefasJSON);
        localStorage.setItem('tarefas', tarefasJSON); // salva o JSON no storage do browser
    }

    // converte o JSON em array novamente e adiciona ao HTML renderizado no browser
    function adicionaTarefasSalvas() {
        const tarefas = localStorage.getItem('tarefas');
        // console.log(tarefas)
        const listaDeTarefas = JSON.parse(tarefas);

        for (let tarefa of listaDeTarefas) {
            inserirTarefaNaLista(tarefa);
        }
    } adicionaTarefasSalvas();

} safe();





