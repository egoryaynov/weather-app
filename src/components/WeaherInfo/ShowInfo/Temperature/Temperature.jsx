import React from 'react';
import styled from "styled-components";

const TemperatureWrapper = styled.div`
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

const Temperature = ({currentTemp}) => {
    return (
        <TemperatureWrapper>
            <span className="temp">
                {currentTemp}
                <span className="deg">℃</span>
            </span>
        </TemperatureWrapper>
    );
};

export default Temperature;
