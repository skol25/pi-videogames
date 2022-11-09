const axios = require('axios')
require('dotenv').config();
const {
    API_KEY
} = process.env;
// API_KEY=d9adfffc88874d9e9e68eea9919bc15d
/**
 * logica de videogames 
 */

module.exports = {
    /**
     * lista todos los videojuegos me los trae de la api y de la base de datos 
     */
    listVideogames: async function(){
        
        try {
            const response= await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}aa`)
            return response.data.results
        } catch (error) {
            throw Error(error.message)
        }
      
         
        
         


    }


} 