
// XMLHttpRequest é um objeto que fornece funcionalidade ao cliente para transferir dados entre um cliente e um servidor. Ele fornece uma maneira fácil de recuperar dados de um URL sem ter que fazer uma atualização de página inteira. Isso permite que uma página da Web atualize apenas uma parte do conteúdo sem interromper o que o usuário esteja fazendo. XMLHttpRequest é usado constantemente na programação de AJAX.

// nome da constante é opcional porem usa-se request por convenção
// nome dos métodos de sucesso e error é opcional porem usa-se "succes" e "error" por convenção

// XMLHttpRequest utilizando callback()

const request = obj => { // cria uma constante que recebe um obj onde seu conteúdo são requisições XMLHttpRequest que também recebem obj e métodos de configuraçoes de requisições XMLHttpRequest

    const xhr = new XMLHttpRequest(); // armazena o construtor do XMLHttpRequest
    xhr.open(obj.method, obj.url, true); // true = Assincrono
    xhr.send(); // envia a requisição
    xhr.addEventListener('load', () => { // ação de load ao document
        // request.status - retorna o código numérico da requisição HTTP
        // request.responseText - retorna o texto referente ao status da requisição HTTP
        if (xhr.status >= 200 && xhr.status < 300) { // se estiver dentro da margem de status
            obj.success(xhr.responseText); // retorna o obj.metodo que chama a funçào de sucesso recebendo como parametro o responseText
        } else { // se erro
            obj.error(xhr.statusText); // retorna o obj.metodo que chama a funçào de error recebendo como parametro o statusText

            // obj.error({
            //     code: xhr.status,
            //     msg: xhr.statusText
            // });            
        }
    })
}

document.addEventListener('click', e => { // adiciona ação de click a todo página HTML
    const el = e.target; // armazena o evento do elemento que foi clicado
    const tag = el.tagName.toLowerCase(); // armazena o nome da tag HTML e converte para minusculo

    if (tag === 'a') { // se <a>
        e.preventDefault(); // inibi atualização de página
        carregaPagina(el); // chama a função passando como argumento o próprio elemento <a>
    }
});

function carregaPagina(el) { // recebe um elemento HTML
    const href = el.getAttribute('href'); // captura o href dos links
    // console.log(href);

    const objConfig = { // cria um obj contendo as informações do xhr.open(obj.method, obj.url, true)
        method: 'GET', // obj.method
        url: href, // obj.url
        success(response) { // método de sucesso
            carregaResultado(response) // chama uma funcao que recebe como parametro o respondo do XMLHttpRequest
        },
        error(errorText) { // método de erro
            console.log(errorText); // log erro
        }
    };

    request(objConfig); // seta o obj ao request
}

function carregaResultado(response) { // recebe como parametro o restorno do XMLHttpRequest
    const resultado = document.querySelector('.resultado'); // captura <div class="resultado">
    resultado.innerHTML = response; // insere o retorno do XMLHttpRequest na <div>
}