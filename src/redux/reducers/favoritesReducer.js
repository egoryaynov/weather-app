import {
    getFavoritesFromLocalStorage, removeFavoritesFromLocalStorage,
    setFavoritesItemToLocalStorage
} from "../../utils/localStorage/favoriteLocalStorage";

const GET_FAVORITES = "GET_FAVORITES";

const initialState = {
    // IDs OF FAVORITES CITIES FROM LOCAL STORAGE
    favorites: [],
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
        case GET_FAVORITES:
            return {
                ...state,
                favorites: [...action.favorites]
            }
        default:
            return state
    }
}

const getFavoritesActionCreator = (favorites) => ({type: GET_FAVORITES, favorites})

// TODO: REFACTOR THIS SHIT PLEASE :)))))))))
export const getFavorites = () => (dispatch) => {
    const favoritesLocalStorage = getFavoritesFromLocalStorage();

    if (favoritesLocalStorage) {
        const favorites = JSON.parse(favoritesLocalStorage);

        dispatch(getFavoritesActionCreator(favorites));
    }
}
export const addFavorite = (id) => (dispatch) => {
    const favoritesLocalStorage = getFavoritesFromLocalStorage();

    const favorites = JSON.parse(favoritesLocalStorage) || [];
    favorites.push(id);

    setFavoritesItemToLocalStorage(favorites);

    dispatch(getFavorites());
}
export const deleteFavorite = (favoriteID) => (dispatch) => {
    const favoritesLocalStorage = getFavoritesFromLocalStorage();

    if (favoritesLocalStorage) {
        let favorites = JSON.parse(favoritesLocalStorage);
        favorites = favorites.filter(id => id !== favoriteID);

        if (favorites.length === 0) {
            removeFavoritesFromLocalStorage()
        } else {
            setFavoritesItemToLocalStorage(favorites);
        }

        dispatch(getFavorites());
    }
}

export default favoritesReducer;