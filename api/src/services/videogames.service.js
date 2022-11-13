const axios = require('axios');
const {Genre,Videogame} = require('../db')
const genreService = require('../services/genres.service')
require('dotenv').config();

const {
    API_KEY
} = process.env;


module.exports = {
    /**
     * lista todos los videojuegos me los trae de la api y de la base de datos 
     * devuelvo 
     * nombre,imagen y generos que seran usados en el front
     * 
     */
    listVideogames: async function(name){
        
        try {
            //si no viene el nombre del juego entonces los listo todos 
            if(!name){
                const response= await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
            
            if(response){
                //nos piden devolver name,img y generos (yo paso el id porque despues hay que buscar el detalle de ese videojuego y es por el id )
                const filterlist = response.data.results.map(element=>{
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
            
                const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`)

                //el response devuelve un array y dicho caso que no venga con nada el array viene vacio 
                if(response.data.results.length!=0){
                    

                    let responseSlice = response.data.results.slice(0,15)
                     
                    //devuelve los 15 filtrados por el nombre
                    return responseSlice.map(element=>{
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
                }else{
    
                    throw Error(`el videojuego ${name} no fue encontrado.`)
                }
                
            }
            
            
        } catch (error) {
            throw Error(error.message)
        }
      
    },

    /**
     * DETALLE DE UN VIDEOJUEGO
     * * [ ] Los campos mostrados en la ruta principal para cada videojuegos (imagen, nombre, y géneros)
    * [ ] Descripción listo
    * [ ] Fecha de lanzamiento listo
    * [ ] Rating listo
    * [ ] Plataformas listo
     */
    detailVideogame: async function(idVideogame){

        try {
            const response = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`)
            if(response.data){
                let element = response.data
                const detailVideogame = {

                    name : element.name,
                    image : element.background_image,
                    released : element.released,
                    rating : element.rating,
                    description : element.description,
                    platforms : element.parent_platforms,
                    genres : element.genres 
                

                }
                return detailVideogame
            }
            else{
                throw Error('El id no coincide con ningun juego guardado.')
            }
        } catch (error) {
           
            throw Error(error.message)
        }

    },

    /**
     * 
     * @param {obj} form 
     * -name:string,
     * -description:string,
     * -released:string/date ,
     * -rating:integer,
     * -genres:[],
     * -platforms:[]
     */

    createVideogame:async function(form){
        let {name,description,released,rating,genres,platforms}=form
       
        

        
        try {
            //primero hay que traer los generos
            
            //primero taer los id de los generos que yo seleccione en el formulario
            //genres = ['shooter','arcade'] traer esos id y setear en la tabla relacional el id del juego con cada genero
            
            //e es cada genero de la lista 
            let genresss = await genreService.listGenres()

            
            let list =   genres.map(  e => {
                return Genre.findOne({
                    where:{name:e},
                    attributes:["id"]
                })
           });
           
           console.log(list)

        

            return form
            const [videogame,created] = await Videogame.findOrCreated({
                where:{name},
                defaults:{
                    name,description,released,rating,platforms
                }
            })
            //falta traer el videjuego y guardarlo en la base de datos 

        } catch (error) {
            throw Error('error al crear el videojuego.')
        }

    }



} 