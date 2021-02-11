import React from 'react';
import styled from 'styled-components';
import {colors} from "../../../styles/variables";

import AddToFavoriteButton from "./AddToFavoriteButton/Star";

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
  background-color: #F8F8F9;
  margin: 40px 0;
`;

const OtherConditions = styled.div`
  justify-self: left;
  width: 115px;

  .item {
    height: 30px;
    position: relative;
  }

  img {
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 0;
    left: -17px;
  }

  span {
    font-size: 1.2rem;
    color: ${colors.greyFontColorDark};
    margin-left: 17px;
  }
`;

const Location = styled.div`
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  position: absolute;
  bottom: 20px;

  span.country {
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const ShowInfo = ({currentCity}) => {
        return (
            <>
                <MainImageWrapper>
                    <img src={currentCity.weather[0].icon4x} alt={currentCity.weather[0].main}/>
                </MainImageWrapper>

                <Temp>
                    <span className="temp">
                        {Math.round(currentCity.temp.currentTemp)}
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
                            <img src={item.icon2x} alt={item.main}/>
                            <span>{item.main}</span>
                        </div>
                    ))}
                </OtherConditions>

                <Location>
                    <span>{currentCity.city.name + ', '}</span>
                    <span className="country">{currentCity.city.country}</span>
                    <AddToFavoriteButton isFavorite={false} cityID={10}/>
                </Location>
            </>
        );
    }
;

export default ShowInfo;
