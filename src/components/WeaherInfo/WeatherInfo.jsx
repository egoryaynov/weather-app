import React from 'react';
import styled from 'styled-components';

import {useSelector} from "react-redux";
import {getCurrentCitySelector} from "../../redux/selectors/currentWeatherSelector";
import {colors} from "../../styles/variables";
import Search from "./Search/Search";
import MenuBar from "./MenuBar/MenuBar";
import ShowInfo from "./ShowInfo/ShowInfo";

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
const CityNotSelected = styled.div`
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

const WeatherInfo = ({setMustShowFavorite, mustShowFavorite}) => {
    const currentCity = useSelector(getCurrentCitySelector);

    return (
        <Info>
            <InfoWrapper>
                <Search/>
                <Bar
                    mustShowFavorite={mustShowFavorite}
                    setMustShowFavorite={setMustShowFavorite}
                />

                {currentCity
                    ? <ShowInfo currentCity={currentCity}/>
                    : <CityNotSelected>
                        <span>City is not selected</span>
                    </CityNotSelected>}
            </InfoWrapper>
        </Info>
    );
};

export default WeatherInfo;
