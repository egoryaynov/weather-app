import React from 'react';
import styled from "styled-components";

import Preloader from "../../common/Preloader";
import {InfoBlockSmall} from "../../../styles/common/InfoBlock";
import {colors} from "../../../styles/variables";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ForecastBlock = styled(InfoBlockSmall)`
  text-align: center;
  padding: 10px;
  height: 70px;

  img {
    width: 40px;
    height: 40px;
  }
`;
const Temp = styled.div`
  span.night-temp {
    color: ${colors.greyFontColorLight};
  }
`;

const Forecast = ({forecast, isFetching, currentTemp, currentWeatherIcon}) => {
    const forecastWithCurrentWeather = React.useMemo(() => {
        if (forecast) {
            return [{
                weekDay: forecast[0].weekDay,
                temp: {
                    day: !!forecast[0].temp.day !== false ? currentTemp : NaN,
                    night: forecast[0].temp.night
                },
                icon2x: currentWeatherIcon
            }, ...forecast.slice(1)]
        }
    }, [forecast, currentTemp, currentWeatherIcon])

    return (
        <div>
            <h2 className='title'>Forecast</h2>

            {isFetching || !forecastWithCurrentWeather
                ? <Preloader/>
                : <Wrapper>
                    {forecastWithCurrentWeather.map(forecastItem => {
                        return <ForecastBlock key={forecastItem.weekDay}>
                            <span>{forecastItem.weekDay}</span>
                            <img src={forecastItem.icon2x} alt={forecastItem.weekDay + ' forecast'}/>
                            <Temp>
                                <span className="day-temp">
                                    {isNaN(forecastItem.temp.day) ? '-' : forecastItem.temp.day}
                                </span>
                                <span> / </span>
                                <span className="night-temp">
                                    {isNaN(forecastItem.temp.night) ? '-' : forecastItem.temp.night}
                                </span>
                            </Temp>
                        </ForecastBlock>
                    })}
                </Wrapper>}
        </div>
    );
};

export default Forecast;
