const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
const videogamesRouter = require('./videogames.router')


// router.get('/',(req,res)=>{
//     res.send({msg:'hola'})
// })

router.use('/videogames',videogamesRouter)

// function routerApi(app){

//     const router =  router
//     ro.use('api/v1',router)
//     router.use('/videogames',videogamesRouter)
    
// }


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
