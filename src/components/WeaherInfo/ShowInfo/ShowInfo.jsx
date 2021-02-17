import React from 'react';
import styled from 'styled-components';
import {colors, fonts} from "../../../styles/variables";

import AddToFavoriteButton from "./AddToFavoriteButton/AddToFavoriteButton";

const MainImageWrapper = styled.div`
  padding: 0;
  width: 200px;
  height: 200px;
`;

const Temp = styled.div`
  text-align: center;
  margin: -40px 0 0 0;
  padding: 0;
  width: 220px;

  span.temp {
    margin-right: 28px;
    font-size: 5.5rem;
    position: relative;
  }

  span.deg {
    font-size: 2.4rem;
    position: absolute;
    top: 10px;
    right: -25px;
  }
`;

const Date = styled.div`
  margin-top: 3px;
  font-size: 1.4rem;

  span.time {
    color: ${colors.greyFontColorLight};
  }
`;

const Line = styled.hr`
  border: none;
  outline: none;
  width: 125px;
  height: 1px;
  background-color: #48484aa6;
  margin: 40px 0 25px;
`;

const OtherConditions = styled.div`
  width: 115px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .item {
    height: 30px;
    position: relative;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  img {
    width: 40px;
    height: 40px;
    position: absolute;
    top: -8px;
    left: -40px;
  }

  span {
    font-size: 1.1rem;
    color: ${colors.greyFontColorDark};
  }
`;

const Location = styled.div`
  font-family: ${fonts.Roboto};
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  margin-top: 30px;
  position: absolute;
  bottom: 20px;

  span.country {
    text-transform: uppercase;
    margin-right: 10px;
    margin-left: 3px;
  }
`;

const ShowInfo = ({currentCity, isFavorite, toggleFavorite}) => {
        return (
            <>
                <MainImageWrapper>
                    <img src={currentCity.weather[0].icon4x} alt={currentCity.weather[0].main}/>
                </MainImageWrapper>

                <Temp>
                    <span className="temp">
                        {currentCity.temp.currentTemp}
                        <span className="deg">℃</span>
                    </span>
                </Temp>

                <Date>
                    <span className="weekDay">{currentCity.date.weekDay + ', '}</span>
                    <span className="time">{currentCity.date.hours + ':00'}</span>
                </Date>

                <Line/>

                <OtherConditions>
                    {currentCity.weather.map(item => (
                        <div className="item" key={item.id}>
                            <img src={item.icon2x} alt={item.description}/>
                            <span>{item.description}</span>
                        </div>
                    ))}
                </OtherConditions>

                <Location>
                    <span>{currentCity.city.name + ','}</span>
                    <span className="country">{currentCity.city.country}</span>
                    <AddToFavoriteButton isFavorite={isFavorite} cityID={currentCity.city.id}
                                         toggleFavorite={toggleFavorite}/>
                </Location>
            </>
        );
    }
;

export default ShowInfo;
