import React from 'react';
import styled from 'styled-components';
import {colors} from "../../../../styles/variables";

const CompassWrapper = styled.div`
  margin-left: 10px;
  
  svg {
    width: 25px;
    height: 25px;
    fill: ${colors.greyFontColorDark}
  }

  #arrow {
    transform-origin: center;
    transform-box: fill-box;
    transform: rotate(${props => props.degrees}deg);
  }
`;

const Compass = ({degrees}) => {
    return (
        <CompassWrapper degrees={degrees}>
            <svg version="1.1" id="Capa_1"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 490 490">
                <g>
                    <path d="M245,490c135.31,0,245-109.69,245-245C490,109.69,380.31,0,245,0S0,109.69,0,245C0,380.31,109.69,490,245,490z M245,30.625
                    c118.206,0,214.375,96.168,214.375,214.375c0,118.206-96.169,214.375-214.375,214.375c-118.207,0-214.375-96.169-214.375-214.375
                    C30.625,126.793,126.793,30.625,245,30.625z"/>
                    <path id="arrow" d="M388.428,371.511L245,72.551l-143.428,298.96L245,279.522L388.428,371.511z M175.848,287.49L245,143.352l69.152,144.138
                    l-52.618-33.747L245,243.139l-16.534,10.604L175.848,287.49z"/>
                </g>
            </svg>
        </CompassWrapper>
    );
};

export default Compass;
