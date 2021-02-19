import React from 'react';
import styled from 'styled-components';
import {InfoBlock} from "./InfoBlock";

const PrecipitationStyled = styled(InfoBlock)`
  .content {
    .value {
      font-size: 2rem;
    }

    .unit {
      font-size: 1.2rem;
    }
  }
`;

const Precipitation = ({snow, rain}) => {
    return (
        <PrecipitationStyled>
            <h3 className="block-title">Precipitation</h3>
            <div className="content center">
                {/*IF NO PRECIPITATION*/}
                {!snow && !rain && <span>No precipitation</span>}

                {/*IF SNOW*/}
                {snow && <span>
                    Snow:
                    <span className="value"> {snow}</span>
                    <span className="unit">mm</span>
                </span>}

                {/*IF RAIN*/}
                {rain && <span>
                    Rain:
                    <span className="value"> {rain}</span>
                    <span className="unit">mm</span>
                </span>}
            </div>
        </PrecipitationStyled>
    );
};

export default Precipitation;
