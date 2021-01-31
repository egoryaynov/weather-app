import React from 'react';
import {useRouteMatch} from "react-router-dom";

const WeatherInfo = () => {
    const match = useRouteMatch("/:city");

    return (
        <h1>{match.params.city}</h1>
    );
};

export default WeatherInfo;
