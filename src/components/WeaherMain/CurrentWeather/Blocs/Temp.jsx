import React from 'react';
import styled from "styled-components";
import {InfoBlock} from "./InfoBlock";

const TempStyled = styled(InfoBlock)`
  .content {
    .value {
      font-size: 1.5rem;
    }
  }
`;


const Temp = ({tempMin, tempMax, feelsLike}) => {
    return (
        <TempStyled>
            <h3 className="block-title">Temperature</h3>
            <div className="content flex-end">
                <span>min: <span className="value">{tempMin} ℃</span></span>
                <span>max: <span className="value">{tempMax} ℃</span></span>
                <span>Feels like: <span className="value">{feelsLike} ℃</span></span>
            </div>
        </TempStyled>
    );
};

export default Temp;