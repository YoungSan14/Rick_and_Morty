import { ADD_CHACTER_FAVORITES, DELETE_CHACTER_TO_FAVORITES } from "./actions"

const initialState = {
    myFavorites: [],
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch( type ){
        case ADD_CHACTER_FAVORITES:
            return{
                ...state,
                myFavorites: state.myFavorites.push(payload)
                // myFavorites: [...state.myFavorites, payload]
            }
        case DELETE_CHACTER_TO_FAVORITES:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((chacter) => chacter.id !== payload)
            } 
        default:
            return{
                ...state,
            }
    }
}

export default rootReducer;