import React from 'react';
import styled from 'styled-components';

// BLOCS
import SunsetSunrise from "./Blocs/SunsetSunrise";
import Wind from "./Blocs/Wind";
import Visibility from "./Blocs/Visibility";
import Humidity from "./Blocs/Humidity";
import Temp from "./Blocs/Temp";
import Precipitation from "./Blocs/Precipitation";

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const CurrentWeather = ({currentCity}) => {
    return (
        <>
            <h2 className='title'>CurrentWeather</h2>
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
