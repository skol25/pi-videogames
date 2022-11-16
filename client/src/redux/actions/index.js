import axios from "axios";

// Aca deben declarar las variables donde tengan el action types.
export const GET_ALL_VIDEOGAMES = "GET_ALL_VIDEOGAMES";


// Esten atentos a que los nombres de las variables coincidan.

//
// NOTA:
//      Para obtener la informacion del detalle recorda utilizar la ruta http://localhost:3001/movies/:id
//      Usar ruta 'http://localhost:3001/movies' para buscar todas las movies en nuestro back.



export const getAllVideogames = () => { 
    return function(dispatch){

        return axios.get('http://localhost:3001/api/v1/videogames')
        .then(response=>dispatch({type:GET_ALL_VIDEOGAMES,payload:response}))
       
    }
};

// export const getMovieDetail = (id) => {
//     return function(dispatch){
//         return fetch(`http://localhost:3001/movies/${id}`)
//         .then(response=>response.json())
//         .then(post=>dispatch({type:GET_MOVIE_DETAILS,payload:post}))
//     }
//  };

// export const createMovie = (movie) => {
//     return {type:CREATE_MOVIE,payload:{...movie,id:id++}}
//  };

// // Desde el componente ejecutamos la action creator, pasandole como argumento el id de la movie que queremos eliminar.
// export const deleteMovie = (id) => { 

//     return{type:DELETE_MOVIE,payload:id}

// };

// // Desde el componente ejecutamos la action creator, pasandole como argumento los values que vamos a utilizar para enviar el form de contacto.
// export const sendEmail = (email) => {
//     return {type: SEND_EMAIL, payload: email,}
//  };
