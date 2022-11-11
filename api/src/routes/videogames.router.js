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
 * por query ?name="..."
 * por body viene un objeto por body
 */
/**
 * devule todos los videojuegos
 *  ruta : /api/v1/videogames
 * 
 */
router.get('/',async (req,res)=>{
        
        try {
                let {name} = req.query
                let listVideogames = await videogamesService.listVideogames(name)
                res.json(listVideogames)  

        } catch (error) {
                
                res.status(404).json({message:error.message})
        }
        
  
})

router.get('/',async(req,res)=>{
        try {
                

        } catch (error) {
                
        }

})

module.exports= router