import styled from "styled-components";
import React from 'react';
import {InfoBlock} from "./InfoBlock";
import sunriseSvg from "../../../../assets/images/sunrise.svg";
import sunsetSvg from "../../../../assets/images/sunset.svg";

const SunsetSunriseStyled = styled(InfoBlock)`
  .content {
    p {
      margin: 0;
      display: flex;
      align-items: center;
      font-size: 1.5rem;

      &:nth-child(1) {
        margin-bottom: 7px;
      }

      img {
        width: 25px;
        height: 25px;
        margin-left: 15px;
      }
    }
  }
`;

const SunsetSunrise = ({sunset, sunrise}) => {
    return (
        <SunsetSunriseStyled>
            <h3 className="block-title">Sunrise & Sunset</h3>
            <div className="content flex-end">
                <p>
                    <span>{sunrise}</span>
                    <img src={sunriseSvg} alt="Sunrise"/>
                </p>
                <p>
                    <span>{sunset}</span>
                    <img src={sunsetSvg} alt="Sunset"/>
                </p>
            </div>
        </SunsetSunriseStyled>
    );
};

export default SunsetSunrise;
