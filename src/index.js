import controlerUserLogin from "./moduloInterface.js";

//Elementos de Avisos para uso do Bootstrap: Modal, Toast, Alert
var myModal = new bootstrap.Modal(document.getElementById('myModal'))

//Trazendo os botões da DOM em HTML

const entrarUsuario = document.getElementById('btnEntrar')
entrarUsuario.addEventListener('click', (event)=> {
    let nome = document.getElementById('usuario').value
    let senha = document.getElementById('senha').value
    
    //Testamdo se os campos não estão vazios
    if(!nome || nome===null || nome==='' || !senha || senha===null || senha==='') {
        alert('Campos vazios, não há como executar o login')

        //Construo um só MODAL e modifico os valores que quero dar para ele de acordo com o campo.  
        document.getElementById('titleModal').innerHTML = 'Campos incorretos'
        document.getElementById('bodyModal').innerHTML = 'Os campos não foram preenchidos corretamente'
        document.getElementById('btnModalClose').innerHTML = 'Fechar'
        document.getElementById('btnModalSave').innerHTML = 'Salvar'
        myModal.show()
    } else {
        controlerUserLogin.loginInfo(nome, senha)
    } 
})