const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();



function routerApi(app){

    const router =  router
    app.use('api/v1',router)

    
}


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
