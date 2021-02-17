import React from 'react';
import styled from 'styled-components';
import {InfoBlock} from "./InfoBlock";

const PrecipitationStyled = styled(InfoBlock)`
`;

const Precipitation = ({snow, rain}) => {
    return (
        <PrecipitationStyled>
            <h3 className="block-title">Precipitation</h3>
            <div className="content center">
                {/*IF NO PRECIPITATION*/}
                {!snow && !rain && <span>No precipitation</span>}

                {/*IF SNOW*/}
                {snow && <span>Snow {snow}mm</span>}

                {/*IF RAIN*/}
                {rain && <span>Rain {rain}mm</span>}
            </div>
        </PrecipitationStyled>
    );
};

export default Precipitation;
