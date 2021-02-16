import React from 'react';
import styled from 'styled-components';

import {InfoBlockBig} from "../../../styles/common/InfoBlock";
import {colors} from "../../../styles/variables";
import Compass from "./Compass/Compass";

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
`;
const InfoBlock = styled(InfoBlockBig)`
  height: 100px;
  padding: 12px;

  h3.block-title {
    color: ${colors.greyFontColorLight};
    margin: 0;
  }

  .value-with-unit {
    .value {
      font-size: 3rem;
    }

    .unit {
      font-size: 1.5rem;
    }
  }
`;

const WindBlock = styled(InfoBlock)`
  .content {
    margin-top: 5px;
  }

  .wind {
    &-title {
      display: flex;
    }

    &-caption {
      font-size: 1.2rem;
      font-weight: bold;
      margin: 0;
    }
  }
`;


const CurrentWeather = ({currentCity}) => {
    console.log(currentCity);
    return (
        <>
            <h2 className='title'>CurrentWeather</h2>
            <Wrapper>
                <WindBlock>
                    <div className="wind-title">
                        <h3 className="block-title">Wind Status</h3>
                        <Compass degrees={currentCity.wind.deg}/>
                    </div>
                    <div className="content">
                        <p className="wind-caption">Wind Speed:</p>
                        <div className="value-with-unit">
                            <span className="value">{currentCity.wind.speed}</span>
                            <span className="unit"> m/s</span>
                        </div>
                    </div>
                </WindBlock>
                <InfoBlock>
                    <h3 className="block-title">Sunrise & Sunset</h3>
                    <p>Sunrise: {currentCity.city.sunrise}</p>
                    <p>Sunset: {currentCity.city.sunset}</p>
                </InfoBlock>
                <InfoBlock>
                    <h3 className="block-title">Visibility</h3>
                    <div className="value-with-unit">
                        <span className="value">{currentCity.visibility}</span>
                        <span className="unit"> km</span>
                    </div>
                </InfoBlock>
                <InfoBlock>
                    <h3 className="block-title">Humidity</h3>
                    <div className="value-with-unit">
                        <span className="value">{currentCity.humidity}</span>
                        <span className="unit"> %</span>
                    </div>
                </InfoBlock>
                <InfoBlock>
                    <h3 className="block-title">Temperature</h3>
                    <div className="limit">
                        <span>min</span>
                        <span>max</span>
                    </div>
                </InfoBlock>
                <InfoBlock>
                    <h3 className="block-title">Precipitation</h3>
                </InfoBlock>
            </Wrapper>
        </>
    );
};

export default CurrentWeather;
