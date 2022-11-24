import axios from "axios";

// Aca deben declarar las variables donde tengan el action types.
export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const GET_ALL_VIDEOGAMES_BY_NAME = "GET_ALL_VIDEOGAMES_BY_NAME";
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";
export const GET_ALL_GENRES = "GET_ALL_GENRES";
export const GET_ALL_PLATFORMS = "GET_ALL_PLATFORMS";
export const GET_DETAIL_VIDEOGAME = "GET_DETAIL_VIDEOGAME";



/**rutas videogame */
export const getAllVideogames = () => { 
    return function(dispatch){

        return axios.get('http://localhost:3001/api/v1/videogames')
        .then(response=>dispatch({type:GET_ALL_VIDEOGAMES,payload:response.data}))
        .catch((err)=>{

            return err
        })
       
    }
};
export const getAllVideogamesByname = (videogameName) => { 
    return function(dispatch){

        return axios.get(`http://localhost:3001/api/v1/videogames?name=${videogameName}`)
        .then(response=>dispatch({type:GET_ALL_VIDEOGAMES_BY_NAME,payload:response.data}))
        .catch((err)=>{

            return err
        })
       
    }
};

export const createVideogame = (form) => {
    return function(dispatch){
        return axios.post('http://localhost:3001/api/v1/videogames',form)
        .then(response => dispatch({type:CREATE_VIDEOGAME,payload:response.data}))
    }
}

export const getDetailVideogame = (idVideogame)=>{
    return function(dispatch){
        return axios.get(`http://localhost:3001/api/v1/videogames/${idVideogame}`)
        .then(response=>dispatch({type:GET_DETAIL_VIDEOGAME,payload:response.data}))
    }
}

//rutas para llenar data 
export const getAllGenres = () => {
    return function(dispatch){
        return axios.get('http://localhost:3001/api/v1/genres')
        .then(response => dispatch({type:GET_ALL_GENRES,payload:response.data.data}))
        .catch((err)=>{
            return err
        })
    }
}


export const getAllPlatforms = () => {
    return function(dispatch){
        return axios.get('http://localhost:3001/api/v1/platforms')
        .then(response => dispatch({type:GET_ALL_PLATFORMS,payload:response.data}))
        .catch((err)=>{
            return err
        })
    }
}

