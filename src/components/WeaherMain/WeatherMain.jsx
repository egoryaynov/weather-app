import React from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";

import Forecast from "./Forecast/Forecast";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import Favorites from "./Favorites/Favorites";

import {colors} from "../../styles/variables";
import {getCurrentCitySelector} from "../../redux/selectors/currentWeatherSelector";
import {getFavoritesSelector} from "../../redux/selectors/favoritesSelector";
import {getFavoritesWeatherThunk} from "../../redux/reducers/favoritesReducer";
import {setCurrentWeatherActionCreator} from "../../redux/reducers/currentWeatherReducer";

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
        const dispatch = useDispatch();

        const forecasts = React.useMemo(() => {
            // GET FORECASTS FROM API ( IF CURRENT CITY ISN'T CHANGED, RETURN MEMO VALUE )
        }, [currentCity])

        const getFavoritesWeather = (favorites, favoritesWeather) => {
            dispatch(getFavoritesWeatherThunk(favorites, favoritesWeather));
        }
        const onSelectFavorite = (favoriteItem) => {
            dispatch(setCurrentWeatherActionCreator(favoriteItem));
        }

        return (
            <Main>
                <Wrapper>
                    {mustShowFavorite && <Favorites favorites={favorites} getFavoritesWeather={getFavoritesWeather}
                                                    onSelectFavorite={onSelectFavorite}/>}
                    {currentCity && !mustShowFavorite && <>
                        <Forecast/>
                        <CurrentWeather currentCity={currentCity}/>
                    </>}
                </Wrapper>
            </Main>
        );
    }
;

export default WeatherMain;
