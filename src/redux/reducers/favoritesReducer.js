import {
    getFavoritesFromLocalStorage, removeFavoritesFromLocalStorage,
    setFavoritesItemToLocalStorage
} from "../../utils/localStorage/favoriteLocalStorage";
import {getCurrentWeatherFromAPIByID} from "../../utils/weather/weather";

const GET_FAVORITES = "favorite/GET_FAVORITES";
const GET_FAVORITES_WEATHER = "favorite/GET_FAVORITES_WEATHER";
const SET_IS_FETCHING = "favorite/SET_IS_FETCHING";

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
        case GET_FAVORITES_WEATHER:
            return {
                ...state,
                favoritesWeather: [...action.favoritesWeather]
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.fetched
            }
        default:
            return state
    }
}

const getFavoritesActionCreator = (favorites) => ({type: GET_FAVORITES, favorites})
const getFavoritesWeatherActionCreator = (favoritesWeather) => ({type: GET_FAVORITES_WEATHER, favoritesWeather})
const setIsFetchingActionCreator = (fetched) => ({type: SET_IS_FETCHING, fetched})

// TODO: *ME IN THE FUTURE*, REFACTOR THIS SHIT PLEASE :)))))))))
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

export const getFavoritesWeatherThunk = (favorites, favoritesWeather) => async (dispatch) => {
    dispatch(setIsFetchingActionCreator(true));

    const newFavoritesWeather = [...favoritesWeather];
    const favoritesWeatherIDs = newFavoritesWeather.map(weather => weather.city.id);

    if (favorites.length !== 0) {
        for (const id of favorites) {
            if (favoritesWeather.length === 0 || !favoritesWeatherIDs.includes(id)) {
                newFavoritesWeather.push(await getCurrentWeatherFromAPIByID(id));
            }
        }
    }

    dispatch(getFavoritesWeatherActionCreator(newFavoritesWeather));
    dispatch(setIsFetchingActionCreator(false));
}

export default favoritesReducer;