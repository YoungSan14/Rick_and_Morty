import { ADD_CHACTER_FAVORITES, DELETE_CHACTER_TO_FAVORITES, FILTER, ORDER } from "./actions"

const initialState = {
    myFavorites: [],
    allFavorites: [] 
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch( type ){
        case ADD_CHACTER_FAVORITES:
            return{
                ...state,
                myFavorites: [...state.allFavorites ],
                allFavorites: [...state.allFavorites, payload]
            }
        case DELETE_CHACTER_TO_FAVORITES:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((chacter) => chacter.id !== payload),
                allFavorites: state.allFavorites.filter((chacter) => chacter.id !== payload)
            } 
        case FILTER:
            return{
                ...state,
                myFavorites: (payload === 'AllGender') 
                ? [...state.allFavorites]
                : [...state.allFavorites].filter((chacter) => chacter.gender === payload)
            }       
        case ORDER:
            return{
                ...state,
                myFavorites: (payload === 'Ascendente')
                ? [...state.myFavorites].sort((a,b) => a.id - b.id ) 
                : [...state.myFavorites].sort((a,b) => b.id - a.id )
            }
        default:
            return{
                ...state,
            }
    }
}

export default rootReducer;