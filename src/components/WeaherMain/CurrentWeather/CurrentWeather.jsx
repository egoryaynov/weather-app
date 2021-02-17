import React from 'react';
import styled from 'styled-components';

import Compass from "./Compass/Compass";
import {WindBlock} from "./BlocsStyled/WindBlock";
import {InfoBlock} from "./BlocsStyled/InfoBlock";
import {TempBlock} from "./BlocsStyled/TempBlock";
import {SunsetSunriseBlock} from "./BlocsStyled/SunsetSunriseBlock";

import sunsetSvg from "../../../assets/images/sunset.svg";
import sunriseSvg from "../../../assets/images/sunrise.svg";

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const CurrentWeather = ({currentCity}) => {
    return (
        <>
            <h2 className='title'>CurrentWeather</h2>
            <Wrapper>
                <WindBlock>
                    <div className="wind-title">
                        <h3 className="block-title">Wind Status</h3>
                        <Compass degrees={currentCity.wind.deg}/>
                    </div>
                    <div className="content flex-end">
                        <p className="caption">Speed:</p>
                        <div className="value-with-unit">
                            <span className="value">{currentCity.wind.speed}</span>
                            <span className="unit"> m/s</span>
                        </div>
                    </div>
                </WindBlock>
                <SunsetSunriseBlock>
                    <h3 className="block-title">Sunrise & Sunset</h3>
                    <div className="content flex-end">
                        <p>
                            <span>{currentCity.city.sunrise}</span>
                            <img src={sunriseSvg} alt="Sunrise"/>
                        </p>
                        <p>
                            <span>{currentCity.city.sunset}</span>
                            <img src={sunsetSvg} alt="Sunset"/>
                        </p>
                    </div>
                </SunsetSunriseBlock>
                <InfoBlock>
                    <h3 className="block-title">Visibility</h3>
                    <div className="content center">
                        <div className="value-with-unit">
                            <span className="value">{currentCity.visibility}</span>
                            <span className="unit"> km</span>
                        </div>
                    </div>
                </InfoBlock>
                <InfoBlock>
                    <h3 className="block-title">Humidity</h3>
                    <div className="content center">
                        <div className="value-with-unit">
                            <span className="value">{currentCity.humidity}</span>
                            <span className="unit"> %</span>
                        </div>
                    </div>
                </InfoBlock>
                <TempBlock>
                    <h3 className="block-title">Temperature</h3>
                    <div className="content center">
                        <div className="limit">
                            <span>min {currentCity.temp.tempMin}</span>
                            <span>max {currentCity.temp.tempMax}</span>
                        </div>
                        <p className="caption">Feels like {currentCity.temp.feelsLike}</p>
                    </div>
                </TempBlock>
                <InfoBlock>
                    <h3 className="block-title">Precipitation</h3>
                    <div className="content center">
                        {/*IF NO PRECIPITATION*/}
                        {!currentCity.snow && !currentCity.rain &&
                        <span>No precipitation</span>}

                        {/*IF SNOW*/}
                        {currentCity.snow &&
                        <span>Snow {currentCity.snow}mm</span>}

                        {/*IF RAIN*/}
                        {currentCity.rain &&
                        <span>Rain {currentCity.rain}mm</span>}
                    </div>
                </InfoBlock>
            </Wrapper>
        </>
    );
};

export default CurrentWeather;
