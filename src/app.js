// criando classes
const express = require('express')
const rotas = require('./rotas')

class App {
    //metodos que é chamado automaticamente quando a Classe é instanciada 
    constructor() {
        this.server = express()

        this.middlewares();
        this.rotas();
    }

    middlewares(){
        //validadores 
        this.server.use(express.json())
    }

    rotas(){
        // acesso da api
        this.server.use(rotas)
    }
}

module.exports = new App().server;