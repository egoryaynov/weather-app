import React from 'react';
import styled from 'styled-components';

import Preloader from "../../common/Preloader";
import {useSelector} from "react-redux";
import {getFavoritesWeatherSelector, getIsFetchingSelector} from "../../../redux/selectors/favoritesSelector";

import {InfoBlockBig} from "../../../styles/common/InfoBlock";
import {colors} from "../../../styles/variables";

const FavoriteWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
`;
const WeatherItem = styled(InfoBlockBig)`
  padding: 10px 0;
  height: 95px;
  cursor: pointer;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.2s;

  &:hover {
    border-color: #867f7f;
  }
`;
const Location = styled.div`
  span {
    text-align: center;
    display: block;
    font-size: 1.2rem;
  }

  span.country {
    color: ${colors.greyFontColorLight};
  }
`;
const Temp = styled.div`
  margin-left: -11px;
  margin-top: 10px;

  span {
    font-size: 1.4rem;
    font-weight: bold;
    position: relative;

    span.deg {
      font-size: 1rem;
      position: absolute;
      top: 2px;
      right: -1.2rem;
    }
  }
`;
const Weather = styled.div`
  margin-left: -20px;
  display: flex;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
  }
`;

const Favorites = ({favorites, getFavoritesWeather, onSelectFavorite}) => {
    const isFetching = useSelector(getIsFetchingSelector);
    const favoritesWeather = useSelector(getFavoritesWeatherSelector);

    React.useEffect(() => {
        getFavoritesWeather(favorites, favoritesWeather);
    }, [favorites])

    if (isFetching) return <Preloader/>

    return (
        <div>
            <h2 className='title'>Favorites</h2>

            <FavoriteWrapper>
                {favoritesWeather.map(weatherItem =>
                    <WeatherItem key={weatherItem.city.id} onClick={() => onSelectFavorite(weatherItem)}>
                        <Location>
                            <span className='city'>{weatherItem.city.name}</span>
                            <span className='country'>{weatherItem.city.country}</span>
                        </Location>
                        <Temp>
                            <span>
                                {weatherItem.temp.currentTemp}
                                <span className="deg">℃</span>
                            </span>
                        </Temp>
                        <Weather>
                            <img src={weatherItem.weather[0].icon2x} alt={weatherItem.weather[0].main}/>
                            <span>{weatherItem.weather[0].main}</span>
                        </Weather>
                    </WeatherItem>
                )}
            </FavoriteWrapper>
        </div>
    );
};

export default Favorites;
