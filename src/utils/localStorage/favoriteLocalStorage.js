const STORAGE_NAME = 'favorites';

export const getFavoritesFromLocalStorage = () => {
    return localStorage.getItem(STORAGE_NAME);
}

export const setFavoritesItemToLocalStorage = (item) => {
    localStorage.setItem(STORAGE_NAME, JSON.stringify(item));
};
export const removeFavoritesFromLocalStorage = () => {
    localStorage.removeItem(STORAGE_NAME);
};
