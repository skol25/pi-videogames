const express = require('express')
const router = express.Router()


router.get('/',(req,res)=>{



    res.json({msg:'desde gender'})
})




module.exports = router



