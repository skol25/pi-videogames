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
     * devuelvo 
     * nombre,imagen y generos que seran usados en el front
     * 
     */
    listVideogames: async function(name){
        
        try {
            if(!name){
                console.log('vengo sin name en query')
                const response= await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
            
            if(response){
                const filterlist =response.data.results.map(element=>{
                    return{
                        id:element.id,
                        name:element.name,
                        image:element.background_image,
                        genres:element.genres.map(genre=>{
                            return {
                                id:genre.id,
                                name:genre.name
                            }
                        }),
                    }
                })
                return filterlist
                }
                else{
                    throw Error('La data no fue encontrada')
                }
           
            }
            else{
                /*si viene el nombre del juego por query entonces */
                console.log(name)
                const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`)
                if(response){
                    return response.data.results
                }else{
                    throw Error('no existe el juego buscado')
                }
                
            }
            
            
        } catch (error) {
            throw Error(error.message)
        }
      
    },

    videogameDetail: async function(){

        try {
            




        } catch (error) {
            throw Error(error.message)
        }


    },


} 