const axios = require('axios')
require('dotenv').config();
const {
    API_KEY
} = process.env;
/**
 * logica de videogames 
 * [ ] Los campos mostrados en la ruta principal para cada videojuegos (imagen, nombre, y géneros)
    [ ] Descripción
[ ] Fecha de lanzamiento
[ ] Rating
[ ] Plataformas
 */

module.exports = {
    /**
     * lista todos los videojuegos me los trae de la api y de la base de datos 
     */
    listVideogames: async function(){
        
        try {
            const response= await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
            if(response){
                const filterlist =response.data.results.map(element=>{
                    return{
                        image:element.background_image,
                        name:element.name,
                        genres:element.genres,
                    }
                })
                return filterlist
            }
            else{
                throw Error('La data no fue encontrada')
            }
           
            
        } catch (error) {
            throw Error(error.message)
        }
      
    }


} 