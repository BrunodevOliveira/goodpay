import rotaApp from "./moduloRotas.js";

class ControleRotasApp {
    constructor(status, idRota, tela, linkUrl) {
        this.status = status
        this.idRota = idRota
        this.tela = tela
        this.linkUrl = linkUrl
    }

    validaRota(status, idRota) {
        if(status === 'true') {
            return(rotaApp.find((rotaApp) => rotaApp.idRota === idRota).linkUrl)//faz com que retorne apenas a chave linkUrl do objeto
        } else {
            return (rotaApp.find((rotaApp) => rotaApp.idRota === idRota).linkUrl)
        }
    }
}

const controleRotasApp = new ControleRotasApp()
export default controleRotasApp