import {getForecastWeatherFromAPIByID} from "../../utils/weather/forecastWeather";

const SET_FORECAST = 'GET_FORECAST';
const SET_IS_FETCHING = 'SET_IS_FETCHING';

const initialState = {
    forecast: null,
    isFetching: false
}

const forecastWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORECAST:
            return {
                ...state,
                forecast: action.forecast
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

export const setForecastActionCreator = (forecast) => ({type: SET_FORECAST, forecast});
const setIsFetchingActionCreator = (fetched) => ({type: SET_IS_FETCHING, fetched});

export const getForecastThunk = (cityID) => async (dispatch) => {
    dispatch(setIsFetchingActionCreator(true));

    const forecast = await getForecastWeatherFromAPIByID(cityID);
    dispatch(setForecastActionCreator(forecast));

    dispatch(setIsFetchingActionCreator(false));
}

export default forecastWeatherReducer;