import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';

import Login from './modules/login';
import Editar from './modules/editarCadastrar';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
const editarContato = new Editar ('.form-editar');
login.init();
cadastro.init();
editarContato.init();
