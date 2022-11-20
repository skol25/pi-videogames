const express = require('express');
const router = express.Router();
const videogamesService = require('../services/videogames.service')
const axios = require('axios')

/**
 * endpoints de todos los videojuegos
 */

/**
 * 
 * por params ruta /:id
 * por query ?name=...&
 * por body viene un objeto por body
 */
/*
 * buscar videojuego
 *  ruta : /api/v1/videogames
 * @params {string} name - nombre del videojuego - query
 * 
 */

router.get('/',async (req,res)=>{
        
        try {
                let {name} = req.query
                let listVideogames = await videogamesService.listVideogames(name)
                res.status(200).json(listVideogames)  

        } catch (error) {
                
                res.status(404).json({message:error.message})
        }
        
  
})
/*
 * detalle de videojuego
 *  ruta : /api/v1/videogames
 * @params {string} id -id del videojuego a buscar - params
 * 
 * devuelve
 * [ ] Los campos mostrados en la ruta principal para cada videojuegos (imagen, nombre, y géneros)
 * [ ] Descripción
 * [ ] Fecha de lanzamiento
 * [ ] Rating
 * [ ] Plataformas
 */
router.get('/:id',async(req,res)=>{
        try {
                const {id} = req.params;
                const videogameDetail = await videogamesService.detailVideogame(id)
                res.status(200).json(videogameDetail)


        } catch (error) {
                
                res.status(400).json({message:error.message})
        }

})
/**
 * Nombre
Descripción
Fecha de lanzamiento
Rating
[ ] Posibilidad de seleccionar/agregar varios géneros
[ ] Posibilidad de seleccionar/agregar varias plataformas
 */
router.post('/',async (req,res)=>{
        try {
                const {name,description,released,rating,genres,platforms} = req.body

                const gameCreated = await videogamesService.createVideogame({name,description,released,rating,genres,platforms}) //probar este objeto a ver si llega 
                res.status(200).json({
                        message:'el juego fue creado',
                        data:gameCreated //devolver el juego creado basicamente mismo formulario 
                })
        } catch (error) {
                res.status(400).json({message:error.message})
        }
})

module.exports= router