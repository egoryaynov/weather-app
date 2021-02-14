export const getCurrentCitySelector = (state) => {
    return state.currentWeather.currentCity;
}

export const getErrorMessageSelector = (state) => {
    return state.currentWeather.error && state.currentWeather.error.message;
}

export const getIsFetchingSelector = (state) => {
    return state.currentWeather.isFetching;
}