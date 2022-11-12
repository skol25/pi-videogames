const axios = require('axios');
const genre = require('../models/genres')
require('dotenv').config();
const {
    API_KEY
} = process.env;


module.exports = {

    listGenres: async function(){
        //hago la peticion para ver todos los generos 
        
        try {
            //con esto me traigo todos los generos 
            let responseGenres = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);

            if(responseGenres.data.results.length!=0){
                let listFilterOfGneres = responseGenres.data.results.map(genre=>{
                    return {
                        id:genre.id,
                        name:genre.name
                    }
                })
               
                return listFilterOfGneres
            }
            else{
                throw Error('No hay nningun genero.')
            }
            
        } catch (error) {
            throw Error(error.message)
        }
            
    }



}