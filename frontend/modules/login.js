import validator from 'validator'
export default class Login {
    constructor(formId) {
        this.form = document.querySelector(formId)
    }

    init() {
        this.events()
    }

    events() {
        this.form.addEventListener('submit', e => {
            e.preventDefault()
            this.valida(e)
        })
    }

    valida(e) {
        const form = e.target
        const email = form.querySelector("[name='email']").value
        const password = form.querySelector("[name='password']").value
        
        let valid = true

        if(!validator.isEmail(email)) {
            valid = false;
            alert('Email inválido.')
        }

        if(password.length < 3 || password.length > 50) {
            valid = false;
            alert('Senha precisa ter entre 3 e 50 caracteres.')
        }

        if(valid) {
            form.submit()
        }


    }
}