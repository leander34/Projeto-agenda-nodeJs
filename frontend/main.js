import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Login from './modules/login'
import Contato from "./modules/contato";
// import './assets/css/style.css';

if (window.location.href.includes("/login/index")) {
    const login = new Login("#form-login");
    const cadastro = new Login("#form-cadastro");

    login.init();
    cadastro.init();
}


if (
  window.location.href.includes("/contato/index") &&
  !window.location.href.includes("/contato/index/")
) {
    console.log("oieee");

  const contatoRegister = new Contato("#form-contato-register");
  contatoRegister.init();
}


if(window.location.href.includes("/contato/index/")) {

    const contatoEdit = new Contato("#form-contato-edit");
    contatoEdit.init();
}