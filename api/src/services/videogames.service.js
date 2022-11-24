const axios = require('axios');
const {Genre,Videogame} = require('../db')
const genreService = require('../services/genres.service')

const {Op}=require('sequelize');
const { raw } = require('body-parser');
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

                //aqui me busco hasta que tenga 100 juegos 
                const response= await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)

                let arrayResponse=[...response.data.results]

               for (let i = 2; i<=5; i++) {
                
                let responseNext= await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)
                arrayResponse=[...arrayResponse,...responseNext.data.results]

               }
                
                

            if(response){
                
                //nos piden devolver name,img y generos (yo paso el id porque despues hay que buscar el detalle de ese videojuego y es por el id )
                let filterlist = arrayResponse.map(element=>{
                    return{
                        id:element.id, 
                        name:element.name,
                        image:element.background_image,
                        rating:element.rating,
                        db:false,
                        genres:element.genres.map(genre=>{
                            return {
                                id:genre.id,
                                name:genre.name
                            }
                        }),
                    }
                })
                 
            
                /**
                 * me traigo todos los videojuegos de la base de datos 
                 */
                
                let dbVideogames = await Videogame.findAll({
                    attributes:["id","name","rating"],
                    
                    include: {
                        model:Genre,
                        attributes:["name","id"],
                        //esto hace que no agrege la de la tabla relacional
                        through:{
                            attributes:[]
                        }
                    }
                   
                })
                
               
               dbVideogames= dbVideogames.map(element => {

                    return {
                        id:element.dataValues.id,
                        name:element.dataValues.name,   
                        rating:element.dataValues.rating,
                        db:true,
                        image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e0aebcf5-946d-44a7-bb9e-62e9964adb2b/dapiflk-1d064c11-b366-4a64-9d24-30a650ba2847.png/v1/fill/w_1024,h_576,q_80,strp/gamecube_controller_minimalist_wallpaper_by_brulescorrupted_dapiflk-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZTBhZWJjZjUtOTQ2ZC00NGE3LWJiOWUtNjJlOTk2NGFkYjJiXC9kYXBpZmxrLTFkMDY0YzExLWIzNjYtNGE2NC05ZDI0LTMwYTY1MGJhMjg0Ny5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.HNm253TIHOwbreSdXl4rIRMDuYigSQtJ0Pwv-9H6RHY",
                        genres:element.dataValues.genres
                        
                    }


                //     let image={image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e0aebcf5-946d-44a7-bb9e-62e9964adb2b/dapiflk-1d064c11-b366-4a64-9d24-30a650ba2847.png/v1/fill/w_1024,h_576,q_80,strp/gamecube_controller_minimalist_wallpaper_by_brulescorrupted_dapiflk-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZTBhZWJjZjUtOTQ2ZC00NGE3LWJiOWUtNjJlOTk2NGFkYjJiXC9kYXBpZmxrLTFkMDY0YzExLWIzNjYtNGE2NC05ZDI0LTMwYTY1MGJhMjg0Ny5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.HNm253TIHOwbreSdXl4rIRMDuYigSQtJ0Pwv-9H6RHY"}
                //   return Object.assign(element.dataValues,image)
                });

                let arrayToSend =[...dbVideogames,...filterlist]    

            

                return arrayToSend
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
                            rating:element.rating,
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
        
                //primero buscar en la base de datos el id 

                // let dbVideogames = await Videogame.findAll({
                //     attributes:["id","name"],
                    
                //     include: {
                //         model:Genre,
                //         attributes:["name"],
                //         //esto hace que no agrege la de la tabla relacional
                //         through:{
                //             attributes:[]
                //         }
                //     }
                   
                // })



            let responseDB = await Videogame.findOne({
                where:{id:idVideogame},
                include: {
                    model:Genre,
                    attributes:["id","name"],
                    //esto hace que no agrege la de la tabla relacional
                    through:{
                        attributes:[]
                    },
                    nest: true,
                    raw:true
                }
                
                
        
            })
            
            
            if(responseDB){
                // responseDB.dataValues.genres=responseDB.dataValues.genres.map((item)=>{
                //     return item.dataValues.name
                // })
               

            return responseDB
           }
            
            const response = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`)
           
            if(response.data){
                let element = response.data
                const detailVideogame = {

                    name : element.name,
                    image : element.background_image,
                    released : element.released,
                    rating : element.rating,
                    description : element.description_raw,
                    platforms : element.parent_platforms.map((platform)=>{
                        return platform.platform.name
                        
                    }),
                    genres : element.genres.map((genre)=>{

                          return {
                            id:genre.id,
                            name:genre.name
                        }
                    
                    }) 
            
                }
                return detailVideogame
            }
            else{

                throw Error('El id no coincide con ningun juego guardado.')
            }
        } catch (error) {
           
            throw Error(error)
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

            //VALIDACION FORMULARIO
            /**
             * ID: * No puede ser un ID de un videojuego ya existente en la API rawg
                Nombre *
                Descripción *
                Fecha de lanzamiento
                Rating
                Plataformas *
             */

            //primero hay que traer los generos
            
            //primero taer los id de los generos que yo seleccione en el formulario
            //genres = ['shooter','arcade'] traer esos id y setear en la tabla relacional el id del juego con cada genero
            
            //e es cada genero de la lista 
             await genreService.listGenres()

            //con esto me traigo los id de los generos que me viene selecionados del front 
            let idOfGenre = await Genre.findAll({
                attributes: ["id"],
                where:{
                    [Op.or]:{name:genres}
                },
                
            })

        

          const [videogame,created] = await Videogame.findOrCreate({
            where:{name},
            defaults:{
                name:name,
                description:description,
                released:released,
                rating:rating,
                platforms:platforms,
            },
            
          })

          videogame.addGenres(idOfGenre)
            
            


        //     let listOfId =  await genres.map( async e => {
                
        //          return  await Genre.findOne({
        //             where:{name:e},
        //             attributes:["id"],
        //             raw : true
        //         })
                
        //    });

        //    //con esto ya tengo los id de los generos que busque de la base de datos 
        //     let promesa = await Promise.all(listOfId).then((listgenres)=>{
        //         let promiseArray=[]
        //         listgenres.forEach(element => {
        //             promiseArray.push(element)
        //         });
        //         return Promise.all(promiseArray)
        //     })
            
            //ahora las plataformas ya las tengo 
            //queda guardar los id con el id generado 

            return videogame
            
        } catch (error) {
            throw Error(error)
        }

    }



} 