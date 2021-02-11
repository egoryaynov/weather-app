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
const Wrapper = styled.div`
`;

const WeatherMain = ({mustShowFavorite}) => {
        return (
            <Main>
                {mustShowFavorite
                    ? <Favorites/>
                    : <Wrapper>
                        <Forecast/>
                        <CurrentWeather/>
                    </Wrapper>}
            </Main>
        );
    }
;

export default WeatherMain;
