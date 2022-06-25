function meuEscopo() { // utiliza-se uma função para proteger a declaração de variáveris em ambiente global

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    let pessoa = [];

    function imprimePessoa (nome, sobrenome, peso, altura) {
        return {nome, sobrenome, peso, altura};
    };

    // previni atualização de página - método legado
    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert(1);
    //     console.log('Enviado com sucesso!')
    // };
    
    // let contador = 1;
    form.addEventListener(
        'submit',
        function recebeEventoForm (evento) {
            evento.preventDefault();
            // console.log(`Form não foi enviado ${contador}`);
            // contador++;

            const nome = form.querySelector('.nome').value;
            const sobrenome = form.querySelector('.sobrenome').value;
            const peso = form.querySelector('.peso').value;
            const altura = form.querySelector('.altura').value;

            pessoa.push(imprimePessoa(nome, sobrenome, peso, altura));
            console.log(pessoa);

            resultado.innerHTML += `<p>${nome} ${sobrenome} possui ${peso}Kg e ${altura}cm de altura.</p>`;

        }
    );

}

meuEscopo();