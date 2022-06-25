
// FETCH - retorna uma promise() e exige dois .then() de resposta
// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => carregaElementosNaPagina(json));

// AXIOS - retorna uma promise() e exige apenas um .then() de resposta
axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data))

function carregaElementosNaPagina(json){

    const table = document.createElement('table');
    const resultado = document.querySelector('.resultado');
    
    for (let pessoa of json) {
        const tr = document.createElement('tr');
        
        let td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);

        table.appendChild(tr);
    }

    resultado.append(table);
}