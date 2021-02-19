import React from 'react';

import MainImage from "./MainImage/MainImage";
import Temperature from "./Temperature/Temperature";
import Date from "./Date/Date";
import {Line} from "./Line";
import OtherConditions from "./OtherConditions/OtherConditions";
import Location from "./Location/Location";

const ShowInfo = ({currentCity, isFavorite, toggleFavorite}) => {
    return (
        <>
            <MainImage currentWeather={currentCity.weather[0]}/>
            <Temperature currentTemp={currentCity.temp.currentTemp}/>
            <Date date={currentCity.date}/>

            <Line/>

            <OtherConditions weather={currentCity.weather}/>
            <Location isFavorite={isFavorite} toggleFavorite={toggleFavorite} cityInfo={currentCity.city}/>
        </>
    );
};

export default ShowInfo;
