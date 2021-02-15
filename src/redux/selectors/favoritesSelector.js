export const getFavoritesSelector = (state) => {
    return state.favorites.favorites;
}
export const getIsFetchingSelector = (state) => {
    return state.favorites.isFetching;
}
export const getFavoritesWeatherSelector = (state) => {
    return state.favorites.favoritesWeather;
}