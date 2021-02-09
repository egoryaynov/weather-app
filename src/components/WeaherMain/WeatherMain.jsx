import React from 'react';

import styled from 'styled-components';
import {colors} from "../../styles/variables";

import Forecast from "./Forecast/Forecast";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import Favorites from "./Favorites/Favorites";

const Main = styled.div`
  background-color: ${colors.mainBgColor};
  flex: 1;
`;

const CurrentWeatherWrapper = styled.div`
  display: ${props => props.mustShowFavorite ? 'none' : 'block'};
`;
const FavoriteWrapper = styled.div`
  display: ${props => props.mustShowFavorite ? 'block' : 'none'};
`;

const WeatherMain = ({mustShowFavorite}) => {
    return (
        <Main>
            <FavoriteWrapper mustShowFavorite={mustShowFavorite}>
                <Favorites/>
            </FavoriteWrapper>
            <CurrentWeatherWrapper mustShowFavorite={mustShowFavorite}>
                <Forecast/>
                <CurrentWeather/>
            </CurrentWeatherWrapper>
        </Main>
    );
};

export default WeatherMain;
