import {
    getFavoritesFromLocalStorage,
    setFavoritesItemToLocalStorage
} from "../../utils/localStorage/favoriteLocalStorage";

const UPDATE_FAVORITES = "UPDATE_FAVORITES";

const initialState = {
    // IDs OF FAVORITES CITIES FROM LOCAL STORAGE
    favorites: null,
    isFetching: false
}

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FAVORITES:
            return {
                ...state,
                favorites: [...action.favorites]
            }
        default:
            return state
    }
}

const updateFavoritesActionCreator = (favorites) => ({type: UPDATE_FAVORITES, favorites})

export const updateFavorites = () => (dispatch) => {
    const favoritesLocalStorage = getFavoritesFromLocalStorage();

    if (favoritesLocalStorage) {
        const favorites = JSON.parse(favoritesLocalStorage);

        dispatch(updateFavoritesActionCreator(favorites));
    }
}
export const addFavorite = (id) => (dispatch) => {
    const favoritesLocalStorage = getFavoritesFromLocalStorage();

    const favorites = JSON.parse(favoritesLocalStorage) || [];
    favorites.push(id);

    setFavoritesItemToLocalStorage(favorites);

    dispatch(updateFavorites());
}
export const deleteFavorite = (favoriteID) => (dispatch) => {
    const favoritesLocalStorage = getFavoritesFromLocalStorage();

    if (favoritesLocalStorage) {
        let favorites = JSON.parse(favoritesLocalStorage);
        favorites = favorites.filter(id => id !== favoriteID);

        setFavoritesItemToLocalStorage(favorites);

        dispatch(updateFavorites());
    }
}

export default favoritesReducer;