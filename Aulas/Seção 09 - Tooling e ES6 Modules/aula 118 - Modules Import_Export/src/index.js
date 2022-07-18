// import/export - importa e exporta módulos (arquivos .js) ou parte dele
// as (como?) -> utilizado para renomear e reatribuir o conteúdo importado = também é possível utilizar direito no export 
// import { nome as nome2, sobrenome as seila, idade, soma } from './modulo1';
// import { nome , sobrenome, idade, soma, Pessoa as Outracoisa } from './modulo1';
// import * as Modulo1 from './modulo1'; // importa tudo
// import soma from './modulo1'; // importa o conteudo default

// multiplos imports
import o, { nome as n, sobrenome, idade, soma } from './modulo1';
console.log(o(5, 40));
console.log(n, sobrenome, idade, soma(4, 4));


// const nome = 'Rebecka';

// console.log(nome);
// console.log(sobrenome);
// console.log(idade);
// console.log(soma(5, 5));
// console.log(Pessoa);

// const p1 = new Outracoisa ('Rebecka', 'Cybelle');
// console.log(p1);

