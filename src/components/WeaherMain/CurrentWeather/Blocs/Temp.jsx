import React from 'react';
import styled from "styled-components";
import {InfoBlock} from "./InfoBlock";

const TempStyled = styled(InfoBlock)`
  .limit {
    display: flex;
    justify-content: space-between;
  }
`;


const Temp = ({tempMin, tempMax, feelsLike}) => {
    return (
        <TempStyled>
            <h3 className="block-title">Temperature</h3>
            <div className="content center">
                <div className="limit">
                    <span>min {tempMin}</span>
                    <span>max {tempMax}</span>
                </div>
                <p className="caption">Feels like {feelsLike}</p>
            </div>
        </TempStyled>
    );
};

export default Temp;