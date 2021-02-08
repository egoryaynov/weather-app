export const getFavoritesFromLocalStorage = () => localStorage.getItem('favorites');

export const setFavoritesItemToLocalStorage = (item) => {
    localStorage.setItem("favorites", JSON.stringify(item));
};
