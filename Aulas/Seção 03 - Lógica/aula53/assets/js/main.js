const container = document.querySelector('.container');
const criarDiv = document.createElement('div');

let criaElementos = () => {

    const elementos = [
        {tag: 'p', texto: 'Frase 1'}, // 0
        {tag: 'div', texto: 'Frase 2'}, // 1
        {tag: 'section', texto: 'Frase 3'}, // 2
        {tag: 'footer', texto: 'Frase 4'} // 3
    ];

    return elementos;
}

let imprimirElementos = arr => {
    
    for (let i = 0; i < arr.length; i++) {
        let {tag, texto} = arr[i]; // atribui cada elemento do arr(elementos) por desestruturação ao index do for
        let tagCriada = document.createElement(tag); // cria uma tag HTML e armazena numa variável
        
        // insere na tag criada o texto do arr(elementos)   
        // tagCriada.innerHTML = texto; // menos seguro uma vez que ñ existe o elemento HTML ainda
        // tagCriada.innerText = texto;
        
        // outra forma seria utilizar NodeText
        let textoCriado = document.createTextNode(texto);
        tagCriada.appendChild(textoCriado);
        
        criarDiv.appendChild(tagCriada); // carrega no DOM um último elemento contendo div>tag>texto
    }
    container.appendChild(criarDiv); // carrega no DOM um último elemento contendo .container>div>tag>texto
}

imprimirElementos(criaElementos());


