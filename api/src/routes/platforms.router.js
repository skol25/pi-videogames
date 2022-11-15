const express = require('express')
const router = express.Router()
const platformService = require('../services/platforms.service')



/**
 * ruta que devuelve la lista de plataformas 
 * 
 * ruta:
 * 
 */


router.get('/',async(req,res)=>{

    try {
        let response =await platformService.listPlatforms()
        res.status(200).json(response)


    } catch (error) {
        res.status(404).json({message:error.message})
    }

})

module.exports = router