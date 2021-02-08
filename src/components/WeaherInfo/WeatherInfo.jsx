import React from 'react';
import styled from 'styled-components';

import {useSelector} from "react-redux";
import {getCurrentCitySelector} from "../../redux/selectors/currentWeatherSelector";

import Star from "../common/Star";

const Info = styled.div`
  flex-basis: 200px;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WeatherInfo = () => {
    const currentCity = useSelector(getCurrentCitySelector);

    return (
        <Info>
            <InfoWrapper>
                <h1>)))))))))</h1>
                <Star isFavorite={true}/>
                <Star isFavorite={false}/>

            </InfoWrapper>
        </Info>
    );
};

export default WeatherInfo;
