const axios = require('axios')
require('dotenv').config();
const {
    API_KEY
} = process.env;

/**
 * logica de videogames 
 */

module.exports = {
    /**
     * lista todos los videojuegos me los trae de la api y de la base de datos 
     */
    listVideogames: async function(){
        
        try {
            const response= await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
            return response.data.results
        } catch (error) {
            throw Error(error.message)
        }
      
         
        
         


    }


} 