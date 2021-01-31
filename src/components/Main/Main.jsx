import React from 'react';
import {Route, useHistory} from "react-router-dom";
import WeatherInfo from "./WeatherInfo/WeatherInfo";
import WeatherSearch from "./WeatherSearch/WeatherSearch";


const Main = ({getWeatherByCity}) => {
    let history = useHistory();

    const onSearch = (city) => {
        history.push(`/${city}`);
    }

    return (
        <div className="main">
            <WeatherSearch onSearch={onSearch}/>
            <Route exact path="/:city" render={() =>
                <WeatherInfo getWeatherByCity={getWeatherByCity}/>
            }/>
        </div>
    );
};

export default Main;
