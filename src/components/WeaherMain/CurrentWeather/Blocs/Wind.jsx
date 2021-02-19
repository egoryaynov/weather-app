import React from 'react';
import styled from "styled-components";

import {InfoBlock} from "./InfoBlock";
import Compass from "../Compass/Compass";

export const WindStyled = styled(InfoBlock)`
  .content {
    height: 72px;
  }

  .wind {
    &-title {
      display: flex;
    }
  }
`;

const Wind = ({degrees, windSpeed}) => {
    return (
        <WindStyled degrees={degrees}>
            <div className="wind-title">
                <h3 className="block-title">Wind Status</h3>
                <Compass degrees={degrees}/>
            </div>
            <div className="content flex-end">
                <p className="caption">Speed:</p>
                <div className="value-with-unit">
                    <span className="value">{windSpeed}</span>
                    <span className="unit"> m/s</span>
                </div>
            </div>
        </WindStyled>
    );
};

export default Wind;
