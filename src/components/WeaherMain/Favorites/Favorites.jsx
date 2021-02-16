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
  padding: 35px 0;
  cursor: pointer;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    border-color: #676363;
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
const Weather = styled.div`
  img {
    width: 30px;
    height: 30px;
  }
`;

const Favorites = ({favorites, getFavoritesWeather}) => {
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
                    <WeatherItem key={weatherItem.city.id}>
                        <Location>
                            <span className='city'>{weatherItem.city.name}</span>
                            <span className='country'>{weatherItem.city.country}</span>
                        </Location>
                        <Weather>
                            <img src={weatherItem.weather[0].icon2x} alt={weatherItem.weather[0].main}/>
                        </Weather>
                    </WeatherItem>
                )}
            </FavoriteWrapper>
        </div>
    );
};

export default Favorites;
