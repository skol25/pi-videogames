const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

/**
 * unicos endpoints que puedo usar 
 *  GET https://api.rawg.io/api/games
 *  GET https://api.rawg.io/api/games?search={game}
 *  GET https://api.rawg.io/api/genres
 *  GET https://api.rawg.io/api/games/{id}
 */



const router = Router();
const videogamesRouter = require('./videogames.router')
const genderRouter = require('./gender.router')


router.use('/videogames',videogamesRouter)
router.use('/gender',genderRouter)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
