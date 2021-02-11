export const getCurrentCitySelector = (state) => state.currentWeather.currentCity;

export const getErrorMessageSelector = (state) => {
    return state.currentWeather.error && state.currentWeather.error.message;
}

export const getIsFetchingSelector = (state) => state.currentWeather.isFetching;