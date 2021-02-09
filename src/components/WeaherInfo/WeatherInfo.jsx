import React from 'react';
import styled from 'styled-components';

import {useSelector} from "react-redux";
import {getCurrentCitySelector} from "../../redux/selectors/currentWeatherSelector";
import {colors} from "../../styles/variables";
import Search from "./Search/Search";

const Info = styled.div`
  flex-basis: 200px;
  padding-top: 20px;
`;
const InfoWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CityNotSelected = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 1rem;
    color: ${colors.greyFontColorLight};
  }
`;

const WeatherInfo = () => {
    const currentCity = useSelector(getCurrentCitySelector);

    return (
        <Info>
            <InfoWrapper>
                <Search/>

                {currentCity
                    ? <h1>AAAAAAAA</h1>
                    : <CityNotSelected>
                        <span>City is not selected</span>
                    </CityNotSelected>}
            </InfoWrapper>
        </Info>
    );
};

export default WeatherInfo;
