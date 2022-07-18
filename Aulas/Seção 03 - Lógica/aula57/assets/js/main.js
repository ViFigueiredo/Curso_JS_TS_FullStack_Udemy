
const container = document.querySelector('.container');
const paragrafo = container.querySelector('.paragrafo');
const tagsP = paragrafo.querySelectorAll('p'); // captura todas as <p> de .paragrafo

const estilosContainer = getComputedStyle(container);
const estilosCorpo = getComputedStyle(document.body);

const corDeFundoContainer = estilosContainer.backgroundColor;
const corDeFundoBody = estilosCorpo.backgroundColor;

console.log('Cor de fundo do <body> : ', corDeFundoBody);
console.log('Cor do texto do <body> : ', corDeFundoContainer);

// iterar os elementos da div paragrafo
for (tag of tagsP) {
    tag.style.color = corDeFundoContainer;
    tag.style.backgroundColor = corDeFundoBody;
}