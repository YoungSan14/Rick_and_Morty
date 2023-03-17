export const ADD_CHACTER_FAVORITES = 'ADD_CHACTER_FAVORITES';
export const DELETE_CHACTER_TO_FAVORITES = 'DELETE_CHACTER_TO_FAVORITES';

export function addFavorite(chacter){
    return {
        type: ADD_CHACTER_FAVORITES,
        payload: chacter,
    }
}

export function deleteFavorite(id){
    return {
        type: DELETE_CHACTER_TO_FAVORITES,
        payload: id
    }
}