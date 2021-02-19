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

const Forecast = ({forecast, isFetching}) => {
    console.log(forecast)

    return (
        <div>
            <h2 className='title'>Forecast</h2>

            {isFetching
                ? <Preloader/>
                : <Wrapper>
                    {forecast.map(forecastItem => {
                        return <ForecastBlock key={forecastItem.weekDay}>
                            <span>{forecastItem.weekDay}</span>
                            <img src={forecastItem.icon2x} alt={forecastItem.weekDay + ' forecast'}/>
                            <Temp>
                                <span className="day-temp">{forecastItem.temp.day} / </span>
                                <span className="night-temp">{forecastItem.temp.night}</span>
                            </Temp>
                        </ForecastBlock>
                    })}
                </Wrapper>}
        </div>
    );
};

export default Forecast;
