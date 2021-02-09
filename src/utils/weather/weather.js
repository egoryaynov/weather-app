import {getCurrentWeatherByCity, getCurrentWeatherByID} from "../../api/api";

export const getWeatherFromAPIByID = async (cityID) => {
    const data = await getCurrentWeatherByID(cityID);

    if (data.cod === 200) {
        return getWeatherFromAPI(data);
    } else {
        return data.message;
    }
}
export const getWeatherFromAPIByCity = async (city) => {
    const data = await getCurrentWeatherByCity(city);

    if (data.cod === 200) {
        return getWeatherFromAPI(data);
    } else {
        return data.message;
    }
}

const getWeatherFromAPI = (data) => {
    return data;
}