const express = require('express');
const router = express.Router();
const videogamesService = require('../services/videogames.service')
const axios = require('axios')

/**
 * endpoints de todos los videojuegos
 */


/**
 * devule todos los videojuegos
 *  ruta : /api/v1/videogames
 * 
 */
router.get('/',async (req,res)=>{
        
        try {
                let listVideogames = await videogamesService.listVideogames()
                res.json(listVideogames)  

        } catch (error) {
                
                res.status(404).json({message:error.message})
        }
        
  
})

module.exports= router