import React from 'react';
import styled from 'styled-components';

import {useSelector} from "react-redux";
import {
    getCurrentCitySelector,
    getErrorMessageSelector,
    getIsFetchingSelector
} from "../../redux/selectors/currentWeatherSelector";
import {colors} from "../../styles/variables";
import Search from "./Search/Search";
import MenuBar from "./MenuBar/MenuBar";
import ShowInfo from "./ShowInfo/ShowInfo";
import Preloader from "../common/Preloader";

const Info = styled.div`
  flex-basis: 200px;
  padding-top: 20px;
`;
const InfoWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const CityNotSelectedWrapper = styled.div`
  position: absolute;
  top: 50%;

  span {
    font-size: 1rem;
    color: ${colors.greyFontColorLight};
  }
`;
const Bar = styled(MenuBar)`
  position: absolute;
  padding: 0;
  right: 0;
`;

const ErrorMessage = styled.div`
  color: red;
`;

const CityNotSelected = () => {
    return (
        <CityNotSelectedWrapper>
            <span>City is not selected</span>
        </CityNotSelectedWrapper>
    );
};

const WeatherInfo = ({setMustShowFavorite, mustShowFavorite}) => {
    const currentCity = useSelector(getCurrentCitySelector);
    const errorMessage = useSelector(getErrorMessageSelector);
    const isFetching = useSelector(getIsFetchingSelector);

    return (
        <Info>
            <InfoWrapper>
                <Search/>
                <Bar
                    mustShowFavorite={mustShowFavorite}
                    setMustShowFavorite={setMustShowFavorite}
                />

                {isFetching && <Preloader/>}
                {currentCity && <ShowInfo currentCity={currentCity}/>}
                {!currentCity && !errorMessage && !isFetching && <CityNotSelected/>}

                {errorMessage &&
                <ErrorMessage>
                    <span>{errorMessage}</span>
                </ErrorMessage>
                }
            </InfoWrapper>
        </Info>
    );
};

export default WeatherInfo;
