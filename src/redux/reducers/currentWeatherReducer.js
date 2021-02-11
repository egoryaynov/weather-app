import {getCurrentWeatherFromAPIByCity, getCurrentWeatherFromAPIByID} from "../../utils/weather/weather";

const SET_WEATHER = "SET_WEATHER";
const SET_ERROR = "SET_ERROR";
const SET_IS_FETCHING = "SET_IS_FETCHING";

const initialState = {
    currentCity: null,
    error: null,
    isFetching: false
}

const currentWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER:
            return {
                ...state,
                currentCity: {...action.payload}
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.error
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

const setCurrentWeatherActionCreator = (payload) => ({type: SET_WEATHER, payload})
const setErrorActionCreator = (error) => ({type: SET_ERROR, error})
const setIsFetchingActionCreator = (fetched) => ({type: SET_IS_FETCHING, fetched})

export const setCurrentWeatherByID = (cityID) => async (dispatch) => {
    dispatch(setErrorActionCreator(null));
    dispatch(setIsFetchingActionCreator(true));

    const data = await getCurrentWeatherFromAPIByID(cityID);
    dispatch(setCurrentWeather(data));
}
export const setCurrentWeatherByCity = (city) => async (dispatch) => {
    dispatch(setErrorActionCreator(null));
    dispatch(setIsFetchingActionCreator(true));

    const data = await getCurrentWeatherFromAPIByCity(city);
    dispatch(setCurrentWeather(data));
}

const setCurrentWeather = (data) => async (dispatch) => {
    if (data.cod === 200) {
        dispatch(setCurrentWeatherActionCreator(data));
    } else {
        dispatch(setErrorActionCreator(data));
    }

    dispatch(setIsFetchingActionCreator(false));
}

export default currentWeatherReducer;