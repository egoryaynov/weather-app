import {
    getFavoritesFromLocalStorage, removeFavoritesFromLocalStorage,
    setFavoritesItemToLocalStorage
} from "../../utils/localStorage/favoriteLocalStorage";

const GET_FAVORITES = "GET_FAVORITES";
const SET_IS_FETCHING = "SET_IS_FETCHING";

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

export const getFavoritesWeather = (favorites) => (dispatch) => {
    dispatch(setIsFetchingActionCreator(true));
    // Получаем информацию о погоде для каждого элемента из favorites[],
    // если этой информации уже нету в favoritesWeather[]
    // if (favorites !== 0 && favoritesWeather.length !== 0) {
    //  if (!favorites.includes( id )) {
    //      Получаем погоды из API по индексу и записываем в favoritesWeather
    //  }
    // } else делаем итерацию по всем элементам favorites[]
    //
    dispatch(setIsFetchingActionCreator(false));
    //
    // Также при удалении элемента из favorites[] , удаляем информацию о погоде
}

export default favoritesReducer;