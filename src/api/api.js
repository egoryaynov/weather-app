const API_KEY = "02aa4385a4870233b2daa4f663c30d92";

export const getWeatherByCity = async (city) => {
    const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

    return await response.json();
}