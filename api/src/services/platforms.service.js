const axios = require('axios');
const {Platform} = require('../db')
require('dotenv').config();
const {
    API_KEY
} = process.env;


module.exports = {

    listPlatforms : async function(){

        try {
            let response = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`);

            response = response.data.results.map(async platform => {
                   
                let [platformCreated,Created] = await Platform.findOrCreate({
                    where: { id: platform.id },
                    defaults: {
                     id: platform.id,
                     name: platform.name
                    }
                })
               return {
                   id: platformCreated.id,
                   name: platformCreated.name
               }
                
            })

            response = await Promise.all(response).then((listPlatforms)=>{
                let promiseArray=[]
                listPlatforms.forEach(element => {
                    promiseArray.push(element)
                });
                return Promise.all(promiseArray)
            })


            return response


        } catch (error) {
            throw Error(error)
        }

    }
}