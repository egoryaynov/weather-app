import {get5DaysForecastByID} from "../../api/api";
import {getFormattedMonth, getIconUrl} from "./common";

export const getForecastWeatherFromAPIByID = async (cityID) => {
    return normalizeData(await get5DaysForecastByID(cityID));
}

const normalizeData = (data) => {
    // OUTPUT:
    // [
    //  {weekDay: 'Tuesday', temp: {day: 30, night: -10}, icon2x: 'daskdaspod.com/${a23}2x'},
    //  {weekDay: 'Tuesday', temp: {day: 30, night: -10}, icon2x: 'daskdaspod.com/${a23}2x'}
    // ]
    const fiveDaysObjectWithDatesKeys = getFiveDaysWithDatesKeys(data.list[0]['dt_txt']);
    const forecast = [];

    data.list.forEach(listItem => {
        const currentDateArray = fiveDaysObjectWithDatesKeys[listItem["dt_txt"].split(' ')[0]];
        if (currentDateArray) currentDateArray.push(listItem);
    });
    Object.keys(fiveDaysObjectWithDatesKeys).forEach(key => {
        forecast.push(prepareForecastItem(fiveDaysObjectWithDatesKeys[key], key));
    })

    return forecast
}

const getFiveDaysWithDatesKeys = (currentDate) => {
    const currentDay = currentDate.split(' ')[0].split('-')[2];
    const fiveDaysObject = {};

    for (let i = 0; i < 5; i++) {
        const date = new Date(currentDate.split(' ')[0]);
        date.setDate(+currentDay + i);
        const month = getFormattedMonth(date.getMonth());

        fiveDaysObject[`${date.getFullYear()}-${month}-${date.getDate()}`] = [];
    }

    return fiveDaysObject;
}

const prepareForecastItem = (forecastItem, date) => {
    const dayFiltered = forecastItem.filter(item => item.sys.pod === "d");
    const nightFiltered = forecastItem.filter(item => item.sys.pod === "n");

    const dayAverageTemp = Math.round(getSumDayNightTemp(dayFiltered) / dayFiltered.length);
    const nightAverageTemp = Math.round(getSumDayNightTemp(nightFiltered) / nightFiltered.length);

    const iconUrl = selectForecastIcon(dayFiltered.length > 0
        ? dayFiltered
        : nightFiltered);
    const weekDay = getWeekDayText(date);

    return {weekDay, temp: {day: dayAverageTemp, night: nightAverageTemp}, icon2x: iconUrl}
}

const getSumDayNightTemp = (filteredArray) => {
    return filteredArray.reduce((sum, item) => {
        return sum += item.main.temp
    }, 0);
}
const selectForecastIcon = (filteredArray) => {
    return getIconUrl(filteredArray[Math.floor(filteredArray.length / 2)].weather[0].icon, '2x');
}
const getWeekDayText = (dateForecast) => {
    const date = new Date(dateForecast);
    const weekNumToStr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return weekNumToStr[date.getDay()]
}