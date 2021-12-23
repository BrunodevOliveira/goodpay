import controlerUserLogin from "./moduloControlerLogin.js";
import controleRotasApp from    "./moduloControleRotas.js"

//Elementos de Avisos para uso do Bootstrap: Modal, Toast, Alert
var myModal = new bootstrap.Modal(document.getElementById('myModal'))

//Ordem para executar e validar o login

const entrarUsuario = document.getElementById('btnEntrar')
entrarUsuario.addEventListener('click', (event)=> {
    let nome = document.getElementById('usuario').value
    let senha = document.getElementById('senha').value
    let alertaModal = controlerUserLogin.loginInfo(nome, senha)

    document.getElementById('titleModal').innerHTML = alertaModal.title
    document.getElementById('bodyModal').innerHTML = alertaModal.bodyModal
    document.getElementById('btnModalClose').innerHTML = alertaModal.b1
    document.getElementById('btnModalSave').innerHTML = alertaModal.b2

    myModal.show()
    
    setTimeout(carregarPagina, 5000)
    
    function carregarPagina() {
        window.location.href= controleRotasApp.validaRota(localStorage.status, alertaModal.idModal)
    }
})

//Ordem para criar um novo usuário
const novoUsuario = document.getElementById('btnNovoUsuario')
novoUsuario.addEventListener('click', (event) => {
  window.location.href = controleRotasApp.validaRota('false', 'usuarioNaoExiste1')  
})