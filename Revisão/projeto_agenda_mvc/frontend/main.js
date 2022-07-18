import 'core-js/stable';
import 'regenerator-runtime/runtime';

// css não utilizado
// import './assets/css/style.css';

// teste de front end -> loga ok em todas as páginas renderizadas
// console.log('ok');

import Form from './modules/form';
import Perfil from './modules/perfil';

const login = new Form('.form-login');
const cadastro = new Form('.form-cadastro');

// método de inicialização do constructor
// ESLint
login.init();
cadastro.init();
