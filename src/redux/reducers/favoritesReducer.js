import {
    getFavoritesFromLocalStorage,
    setFavoritesItemToLocalStorage
} from "../../utils/localStorage/favoriteLocalStorage";

const UPDATE_FAVORITES = "UPDATE_FAVORITES";

const initialState = {
    // IDs OF FAVORITES CITIES FROM LOCAL STORAGE
    favorites: null,
    favoritesWeather: [
        // {id, name, country ...}
        // {id, name, country ...}
        // {id, name, country ...}
    ],
    errorMessage: null,
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

const getFavoritesActionCreator = (favorites) => ({type: UPDATE_FAVORITES, favorites})

export const getFavorites = () => async (dispatch) => {
    const favoritesLocalStorage = await getFavoritesFromLocalStorage();

    if (favoritesLocalStorage) {
        const favorites = await JSON.parse(favoritesLocalStorage);

        dispatch(getFavoritesActionCreator(favorites));
    }
}
export const addFavorite = (id) => async (dispatch) => {
    const favoritesLocalStorage = await getFavoritesFromLocalStorage();

    const favorites = await JSON.parse(favoritesLocalStorage) || [];
    favorites.push(id);

    await setFavoritesItemToLocalStorage(favorites);

    dispatch(getFavorites());
}
export const deleteFavorite = (favoriteID) => async (dispatch) => {
    const favoritesLocalStorage = await getFavoritesFromLocalStorage();

    if (favoritesLocalStorage) {
        let favorites = await JSON.parse(favoritesLocalStorage);
        favorites = favorites.filter(id => id !== favoriteID);

        await setFavoritesItemToLocalStorage(favorites);

        dispatch(getFavorites());
    }
}

export default favoritesReducer;