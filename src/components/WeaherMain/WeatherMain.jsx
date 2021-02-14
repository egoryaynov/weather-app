import React from 'react';
import styled from 'styled-components';
import {useSelector} from "react-redux";

import Forecast from "./Forecast/Forecast";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import Favorites from "./Favorites/Favorites";

import {colors} from "../../styles/variables";
import {getCurrentCitySelector} from "../../redux/selectors/currentWeatherSelector";
import {getFavoritesSelector} from "../../redux/selectors/favoritesSelector";

const Main = styled.div`
  background-color: ${colors.mainBgColor};
  flex: 1;
`;
const Wrapper = styled.div`
  padding: 0 30px;

  h2.title {
    font-size: 1.6rem;
  }
`;

const WeatherMain = ({mustShowFavorite}) => {
        const currentCity = useSelector(getCurrentCitySelector);
        const favorites = useSelector(getFavoritesSelector);
        const forecasts = React.useMemo(() => {
            // GET FORECASTS ( IF CURRENT CITY ISN'T CHANGED, RETURN MEMO VALUE )
        }, [currentCity])

        return (
            <Main>
                <Wrapper>
                    {mustShowFavorite
                        ? <Favorites favorites={favorites}/>
                        : <>
                            <Forecast/>
                            <CurrentWeather/>
                        </>}
                </Wrapper>
            </Main>
        );
    }
;

export default WeatherMain;
