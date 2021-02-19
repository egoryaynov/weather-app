import React from 'react';
import styled from "styled-components";
import {colors} from "../../../../styles/variables";

const OtherConditionsWrapper = styled.div`
  width: 115px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .item {
    height: 30px;
    position: relative;

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  img {
    width: 40px;
    height: 40px;
    position: absolute;
    top: -8px;
    left: -40px;
  }

  span {
    font-size: 1.1rem;
    color: ${colors.greyFontColorDark};
  }
`;

const OtherConditions = ({weather}) => {
    return (
        <OtherConditionsWrapper>
            {weather.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.icon2x} alt={item.description}/>
                    <span>{item.description}</span>
                </div>
            ))}
        </OtherConditionsWrapper>
    );
};

export default OtherConditions;
