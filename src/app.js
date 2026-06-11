// criando classes
import express from 'express';
import rotas from './rotas';

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

export default new App().server;