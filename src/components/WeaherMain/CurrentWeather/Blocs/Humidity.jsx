import React from 'react';
import styled from "styled-components";
import {InfoBlock} from "./InfoBlock";

const HumidityStyled = styled(InfoBlock)`
`;

const Humidity = ({humidity}) => {
    return (
        <HumidityStyled>
            <h3 className="block-title">Humidity</h3>
            <div className="content center">
                <div className="value-with-unit">
                    <span className="value">{humidity}</span>
                    <span className="unit"> %</span>
                </div>
            </div>
        </HumidityStyled>
    );
};

export default Humidity;
