import React from 'react';
import styled from 'styled-components';

import {Wind, Humidity, Precipitation, SunsetSunrise, Temp, Visibility} from "./Blocs/";

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const CurrentWeather = ({currentCity}) => {
    return (
        <>
            <h2 className='title'>Current Weather</h2>
            <Wrapper>
                <Wind degrees={currentCity.wind.deg} windSpeed={currentCity.wind.speed}/>
                <SunsetSunrise sunrise={currentCity.city.sunrise} sunset={currentCity.city.sunset}/>
                <Visibility visibility={currentCity.visibility}/>
                <Humidity humidity={currentCity.humidity}/>
                <Temp tempMin={currentCity.temp.tempMin} tempMax={currentCity.temp.tempMax}
                      feelsLike={currentCity.temp.feelsLike}/>
                <Precipitation rain={currentCity.rain} snow={currentCity.snow}/>
            </Wrapper>
        </>
    );
};

export default CurrentWeather;
