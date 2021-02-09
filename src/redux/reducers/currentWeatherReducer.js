import {getWeatherFromAPIByCity, getWeatherFromAPIByID} from "../../utils/weather/weather";

const SET_WEATHER = "SET_WEATHER";
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";

const initialState = {
    /*
        currentCity: {
        cityID, cityName, country, sunset, sunrise, timezone, time (need convert timestamp (dt) to normal view),
        weather: {main ( Snow/Rain/Sunny etc... ), description, icon} ,
        currentTemp, dayOfWeek,
        ~IF HAS~ rain: (for the last hour), snow(for the last hour),
        main: {temp, feelsLike, tempMin, tempMax, pressure, humidity},
        visibility (meters),
        wind: {speed, deg},
        clouds (Cloudiness %),
    */
    currentCity: null,
    errorMessage: null,
    isFetching: false
}

const currentWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER:
            return {
                ...state,
                currentCity: action.payload
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

export const setCurrentWeatherByID = (cityID) => (dispatch) => {
    const data = getWeatherFromAPIByID(cityID);
    dispatch(setCurrentWeather(data));
}
export const setCurrentWeatherByCity = (city) => (dispatch) => {
    const data = getWeatherFromAPIByCity(city);
    dispatch(setCurrentWeather(data));
}

const setCurrentWeather = (data) => (dispatch) => {
    if (data.cod === 200) {
        dispatch(setCurrentWeatherActionCreator(data));
    } else {
        dispatch(setErrorMessageActionCreator(data.message))
    }
}

export default currentWeatherReducer;