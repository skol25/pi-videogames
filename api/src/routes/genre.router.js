const express = require('express')
const router = express.Router()
const genreService = require('../services/genres.service')

/**
 * trae todos los generos 
 * tipo : GET
 * ruta : /api/v1/genres
 * no requiere de parametro alguno 
 */


router.get('/',async (req,res)=>{

    try {
        
        let response = await genreService.listGenres()
        res.status(200).json({
            message:'La lista de generos fue solicitada con exito.',
            data:response
        })

    } catch (error) {
        res.status(400).json({message:error.message})
    }
   
})




module.exports = router



