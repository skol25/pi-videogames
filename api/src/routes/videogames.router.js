const express = require('express');
const router = express.Router();

/**
 * endpoints de todos los videojuegos
 */

router.get('/',(req,res)=>{
  
        res.json({msg:'hola'})
  
})

module.exports= router