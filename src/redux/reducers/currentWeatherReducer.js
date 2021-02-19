import {getCurrentWeatherFromAPIByCity, getCurrentWeatherFromAPIByID} from "../../utils/weather/currentWeather";

const SET_WEATHER = "currentWeather/SET_WEATHER";
const SET_ERROR = "currentWeather/SET_ERROR";
const SET_IS_FETCHING = "currentWeather/SET_IS_FETCHING";

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
                currentCity: action.payload || null
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

export const setCurrentWeatherActionCreator = (payload) => ({type: SET_WEATHER, payload})
const setErrorActionCreator = (error) => ({type: SET_ERROR, error})
const setIsFetchingActionCreator = (fetched) => ({type: SET_IS_FETCHING, fetched})

export const setCurrentWeatherByID = (cityID) => async (dispatch) => {
    dispatch(setCurrentWeather(getCurrentWeatherFromAPIByID, cityID));
}
export const setCurrentWeatherByCity = (city) => async (dispatch) => {
    dispatch(setCurrentWeather(getCurrentWeatherFromAPIByCity, city));
}

const setCurrentWeather = (callback, parameter) => async (dispatch) => {
    dispatch(setCurrentWeatherActionCreator());
    dispatch(setErrorActionCreator(null));
    dispatch(setIsFetchingActionCreator(true));

    const data = await callback(parameter);

    if (data.cod === 200) {
        dispatch(setCurrentWeatherActionCreator(data));
    } else {
        dispatch(setErrorActionCreator(data));
    }

    dispatch(setIsFetchingActionCreator(false));
}

export default currentWeatherReducer;