//estado inicial 
const initialState ={
    videogames:[],
    platforms:[],
    genres:[],
    VideogameDetail:{}

}

export default function rootReducer(state=initialState,action){
    switch(action.type){
       case 'GET_ALL_VIDEOGAMES' :
        return{
            ...state,
            videogames:action.payload
        } 

        case 'CREATE_VIDEOGAME' :
            return{

            ...state,videogames:[...state.videogames,{...action.payload}]
            }

        case 'GET_DETAIL_VIDEOGAME':
            return{
                ...state,
                VideogameDetail:action.payload
            }


        case 'GET_ALL_GENRES':
            return{
                ...state,
                genres:action.payload
            }

        case 'GET_ALL_PLATFORMS':
            return{
                ...state,platforms:[...state.platforms,{...action.payload}]
            }
    

        default:return{...state}
    }
}