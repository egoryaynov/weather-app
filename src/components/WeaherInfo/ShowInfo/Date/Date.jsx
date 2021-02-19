import React from 'react';
import styled from "styled-components";
import {colors} from "../../../../styles/variables";

const DateWrapper = styled.div`
  margin-top: 3px;
  font-size: 1.4rem;

  span.time {
    color: ${colors.greyFontColorLight};
  }
`;

const Date = ({date}) => {
    return (
        <DateWrapper>
            <span className="weekDay">{date.weekDay + ', '}</span>
            <span className="time">{date.hours + ':00'}</span>
        </DateWrapper>
    );
};

export default Date;
