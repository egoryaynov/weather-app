import {getCurrentWeatherFromAPIByCity, getCurrentWeatherFromAPIByID} from "../../utils/weather/weather";

const SET_WEATHER = "SET_WEATHER";
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";

const initialState = {
    currentCity: null,
    errorMessage: null,
    isFetching: false
}

const currentWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER:
            return {
                ...state,
                currentCity: {...action.payload}
            }
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.message
            }
        default:
            return state
    }
}

const setCurrentWeatherActionCreator = (payload) => ({type: SET_WEATHER, payload})
const setErrorMessageActionCreator = (message) => ({type: SET_ERROR_MESSAGE, message})

export const setCurrentWeatherByID = (cityID) => async (dispatch) => {
    const data = await getCurrentWeatherFromAPIByID(cityID);
    dispatch(setCurrentWeather(data));
}
export const setCurrentWeatherByCity = (city) => async (dispatch) => {
    const data = await getCurrentWeatherFromAPIByCity(city);
    dispatch(setCurrentWeather(data));
}

const setCurrentWeather = (data) => async (dispatch) => {
    if (data.cod === 200) {
        dispatch(setCurrentWeatherActionCreator(data));
    } else {
        dispatch(setErrorMessageActionCreator(data.message))
    }
}

export default currentWeatherReducer;