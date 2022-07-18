
// const request = obj => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(obj.method, obj.url, true);
//         xhr.send();
//         xhr.addEventListener('load', () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.responseText);
//             } else {
//                 reject(xhr.statusText);
//             }
//         })
//     });
// }

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href');

    // async/await
    try {
        const response = await fetch(href);
        if (response.status !== 200) throw new Error('ERROR 404!');
        const html = await response.text();
        carregaResultado(html);
    } catch {
        e => console.log(e)
    }

    // fetch(href)
    //     .then(response => {
    //         if (response.status !== 200) throw new Error('ERROR 404!');
    //         return response.text()
    //     })
    //     .then(html => {
    //     })
    //     .catch(e => console.error(e));
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

// Fetch API (GET)
// suponhamos que precisamos carregar uma página HTML
// fetch('./assets/pages/pagina.html') // já retorna uma promise
//     .then(resposta => {
//         if (resposta.status !== 200) throw new Error('ERRO 404 NOSSO!');
//         return resposta.text(); // esse método também retorna uma promise
//     })
//     .then(html => console.log(html))
//     .catch(e => console.log(e))
//     .catch(e => console.warn(e))
//     .catch(e => console.error(e));
