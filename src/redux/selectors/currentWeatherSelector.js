export const getCurrentCitySelector = (state) => {
    return state.currentWeather.currentCity;
}

export const getErrorMessageSelector = (state) => {
    return state.currentWeather.error && state.currentWeather.error.message;
}

export const getIsFetchingCurrentWeatherSelector = (state) => {
    return state.currentWeather.isFetching;
}