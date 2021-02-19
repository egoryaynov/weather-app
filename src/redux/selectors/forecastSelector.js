export const getForecastSelector = (state) => {
    return state.forecastWeather.forecast;
}

export const getIsFetchingForecastSelector = (state) => {
    return state.forecastWeather.isFetching;
}