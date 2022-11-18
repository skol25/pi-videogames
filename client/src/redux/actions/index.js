import axios from "axios";

// Aca deben declarar las variables donde tengan el action types.
export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";
export const GET_ALL_GENRES = "GET_ALL_GENRES";
export const GET_ALL_PLATFORMS = "GET_ALL_PLATFORMS";
export const GET_DETAIL_VIDEOGAME = "GET_DETAIL_VIDEOGAME";



/**rutas videogame */
export const getAllVideogames = () => { 
    return function(dispatch){

        return axios.get('http://localhost:3001/api/v1/videogames')
        .then(response=>dispatch({type:GET_ALL_VIDEOGAMES,payload:response}))
       
    }
};

export const createVideogame = (form) => {
    return function(dispatch){
        return axios.post('http://localhost:3001/api/v1/videogames',form)
        .then(response => dispatch({type:CREATE_VIDEOGAME,payload:response}))
    }
}

export const getDetailVideogame = (idVideogame)=>{
    return function(dispatch){
        return axios.get(`http://localhost:3001/api/v1/videogames/${idVideogame}`)
        .then(response=>dispatch({type:GET_DETAIL_VIDEOGAME,payload:response}))
    }
}

//rutas para llenar data 
export const getAllGenres = () => {
    return function(dispatch){
        return axios.get('http://localhost:3001/api/v1/genres')
        .then(response => dispatch({type:getAllGenres,payload:response}))
    }
}


export const getAllPlatforms = () => {
    return function(dispatch){
        return axios.get('http://localhost:3001/api/v1/platforms')
        .then(response => dispatch({type:getAllPlatforms,payload:response}))
    }
}

