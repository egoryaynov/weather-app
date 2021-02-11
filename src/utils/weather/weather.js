import {getCurrentWeatherByCity, getCurrentWeatherByID} from "../../api/api";

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
            icon: getIconUrl(weatherItem.icon)
        }
    });

    return {
        cod: data.cod,
        city: {
            id: data.id,
            name: data.name,
            country: data.sys.country,
            sunset: data.sys.sunset,
            sunrise: data.sys.sunrise,
            timezone: data.timezone,
        },
        date: getDate(),
        weather: weather,
        temp: {
            currentTemp: data.main.temp,
            tempMin: data.main["temp_min"],
            tempMax: data.main["temp_max"],
            feelsLike: data.main["feels_like"],
        },
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        visibility: data.visibility,
        wind: {...data.wind},
        clouds: data.clouds.all,
        snow: snow && snow["1h"],
        rain: rain && rain["1h"]
    }
}

const getIconUrl = (iconCode) => {
    return `http://openweathermap.org/img/wn/${iconCode}@4x.png`
}
const getDate = () => {
    const date = new Date();
    const weekNumToStr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return {
        hours: date.getHours(),
        weekDay: weekNumToStr[date.getDay()],
    }
}