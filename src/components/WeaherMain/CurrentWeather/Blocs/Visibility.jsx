import React from 'react';
import styled from "styled-components";
import {InfoBlock} from "./InfoBlock";

const VisibilityStyled = styled(InfoBlock)`
`;

const Visibility = ({visibility}) => {
    return (
        <VisibilityStyled>
            <h3 className="block-title">Visibility</h3>
            <div className="content center">
                <div className="value-with-unit">
                    <span className="value">{visibility}</span>
                    <span className="unit"> km</span>
                </div>
            </div>
        </VisibilityStyled>
    );
};

export default Visibility;
