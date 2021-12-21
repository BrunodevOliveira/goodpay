import controlerUserLogin from "./moduloInterface.js";

//Elementos de Avisos para uso do Bootstrap: Modal, Toast, Alert
var myModal = new bootstrap.Modal(document.getElementById('myModal'))

//Trazendo os botões da DOM em HTML

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
})