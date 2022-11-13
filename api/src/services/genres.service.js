const axios = require('axios');
const {Genre} = require('../db')
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
                
                let listFilterOfGneres =  responseGenres.data.results.map( async genre => {
                   
                    let [genreCreated,Created] = await Genre.findOrCreate({
                        where: { id: genre.id },
                        defaults: {
                         id: genre.id,
                         name: genre.name
                        }
                    })
                   return {
                       id: genreCreated.id,
                       name: genreCreated.name
                   }
                    
                })
               

                return Promise.all(listFilterOfGneres).then((listgenres)=>{
                    let promiseArray=[]
                    listgenres.forEach(element => {
                        promiseArray.push(element)
                    });
                    return Promise.all(promiseArray)
                })
               
                
            }
            else{
                throw Error('No hay nningun genero.')
            }
            
        } catch (error) {
            throw Error(error.message)
        }
            
    }



}