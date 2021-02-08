import React from 'react';

import styled from 'styled-components';
import {colors} from "../../styles/variables";

import Forecast from "./Forecast/Forecast";
import CurrentWeather from "./CurrentWeather/CurrentWeather";

const Main = styled.div`
  background-color: ${colors.mainBgColor};;
  flex: 1;
`;

const WeatherMain = () => {
    return (
        <Main>
            <Forecast/>
            <CurrentWeather/>
        </Main>
    );
};

export default WeatherMain;
