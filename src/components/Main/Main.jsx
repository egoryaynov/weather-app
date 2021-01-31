import React from 'react';
import WeatherInfo from "./WeatherInfo/WeatherInfo";
import WeatherSearch from "./WeatherSearch/WeatherSearch";

const Main = () => {
    return (
        <>
            <WeatherSearch/>
            <WeatherInfo/>
        </>
    );
};

export default Main;
