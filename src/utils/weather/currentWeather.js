import {getCurrentWeatherByCity, getCurrentWeatherByID} from "../../api/api";
import {getIconUrl} from "./common";

export const getCurrentWeatherFromAPIByID = async (cityID) => {
    return await getCurrentWeatherFromAPI(getCurrentWeatherByID, cityID);
}
export const getCurrentWeatherFromAPIByCity = async (city) => {
    return await getCurrentWeatherFromAPI(getCurrentWeatherByCity, city);
}

const getCurrentWeatherFromAPI = async (callback, parameter) => {
    const data = await callback(parameter);

    if (data.cod === 200) {
        return normalizeData(data);
    }

    // IF ERROR -> {cod: 404..., message: "error message"}
    return data;
}

const normalizeData = (data) => {
    const snow = data.snow || null;
    const rain = data.rain || null;
    const weather = data.weather.map(weatherItem => {
        return {
            ...weatherItem,
            icon2x: getIconUrl(weatherItem.icon, '2x'),
            icon4x: getIconUrl(weatherItem.icon, '4x'),
        }
    });

    return {
        cod: data.cod,
        city: {
            id: data.id,
            name: data.name,
            country: data.sys.country,
            sunset: getSunsetOrSunriseTime(data.sys.sunset),
            sunrise: getSunsetOrSunriseTime(data.sys.sunrise),
            timezone: data.timezone,
        },
        date: getDate(),
        weather: weather,
        temp: {
            currentTemp: Math.round(data.main.temp),
            tempMin: Math.round(data.main["temp_min"]),
            tempMax: Math.round(data.main["temp_max"]),
            feelsLike: Math.round(data.main["feels_like"]),
        },
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        // CONVERTED METERS TO KM
        visibility: (data.visibility / 1000).toFixed(2),
        wind: {...data.wind},
        clouds: data.clouds.all,
        snow: snow && snow["1h"],
        rain: rain && rain["1h"]
    }
}

const getDate = () => {
    const date = new Date();
    const weekNumToStr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return {
        hours: date.getHours(),
        weekDay: weekNumToStr[date.getDay()],
    }
}
const getSunsetOrSunriseTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().length === 1
        ? '0' + date.getMinutes()
        : date.getMinutes();

    return `${hours}:${minutes}`
}