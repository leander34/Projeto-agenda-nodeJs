import validator from "validator";
export default class Contato {
    constructor(formId) {
        this.form = document.querySelector(formId)
    }

    init() {
        this.events()
    }

    events() {
        this.form.addEventListener("submit", (e) => {
          e.preventDefault();
          this.valida(e);
        });
    }

    valida(e) {
        const form = e.target
        const nome = form.querySelector("[name='nome']").value
        const sobrenome = form.querySelector("[name='sobrenome']").value;
        const email = form.querySelector("[name='email']").value;
        const telefone = form.querySelector("[name='telefone']").value;

        let valid = true

        if(!nome.trim()) {
            valid = false
            alert('Nome é obrigatório')
        }

        if(email.trim() && !validator.isEmail(email)) {
            valid = false;
            alert('Email inválido')
        }

        if(!email.trim() && !telefone.trim()) {
            valid = false
            alert('Você precisa informar pelo menos um contato: email ou  telefone')
        }

        if(valid) {
            form.submit()
        }

    }
}