import userLogin from "./moduloDados.js";
import comunicacaoModal from "./moduloComunicacaoDados.js";

class ControlerUserLogin{
    constructor(status) {
        this.status = status
    }

    checkLogin() {
        this.status = true
    }

    checkOutLogin() {
        this.status = false
    }

    loginInfo(user, senha) {
        // localStorage.clear
        var infoCheck = userLogin.find((userLogin) => userLogin.username === user) //procura em userLogin se o usuário está cadastrado. Retorna o objeto inteiro
        if(user === null || senha === null || user === "" || senha === "") {
            this.checkOutLogin()
            localStorage.status = this.status
            return (comunicacaoModal.find((comunicacaoModal) => comunicacaoModal.idModal === 'camposVazios1'))
        }
        else if(!infoCheck) {
            this.checkOutLogin()
            localStorage.status = this.status //é uma função do prórpio navegador que armazena alguns dados que eu armazeno nele
            return (comunicacaoModal.find((comunicacaoModal) => comunicacaoModal.idModal === 'usuarioNaoExiste1'))
        } else if (infoCheck.senha === senha) {
            this.checkLogin()
            localStorage.status = this.status
            return(comunicacaoModal.find((comunicacaoModal) => comunicacaoModal.idModal === 'loginExecutado1'))
        }
        else {
            this.checkOutLogin()
            localStorage.status = this.status
            return(comunicacaoModal.find((comunicacaoModal) => comunicacaoModal.idModal === 'falhaLogin1'))
        }   
        
    }
    
    
    conferirUsuario(nome, email) {
        let infoCheck = userLogin.find((userLogin) => userLogin.username === nome && userLogin.email === email)
        let alertMsg = document.getElementById('alertMsg')

        if(nome === null || email === null || nome === "" || email === "") {
            alertMsg.classList.add('alert', 'alert-danger', 'text-center')
            alertMsg.innerHTML = 'Campo de email ou usuário não preenchidos.'
        }else if(!infoCheck) {
            alertMsg.classList.add('alert', 'alert-danger', 'text-center')
            alertMsg.innerHTML = 'Email ou usuário não encontrados.'
        } else {
            alertMsg.classList.remove('alert-danger')
            alertMsg.classList.add('alert', 'alert-success', 'text-center')
            alertMsg.innerHTML = 'Email enviado com sucesso!'
        }
    }
}

const controlerUserLogin = new ControlerUserLogin()

export default controlerUserLogin