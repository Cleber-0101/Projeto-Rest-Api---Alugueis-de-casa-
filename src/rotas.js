//Trabalhando apenas com roteamento 0
import { Router } from 'express';
const routes = new Router();

routes.get('/', (req, res) => {
    //retorna pro usuario
    return res.json({ ok: true })
})

export default routes;