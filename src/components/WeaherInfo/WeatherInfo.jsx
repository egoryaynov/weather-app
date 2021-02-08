import React from 'react';
import styled from 'styled-components';

import Star from "../common/Star";

const Info = styled.div`
  flex-basis: 200px;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WeatherInfo = () => {
    return (
        <Info>
            <InfoWrapper>
                <h1>)))))))))</h1>
                <Star isFavorite={true}/>
                <Star isFavorite={false}/>
            </InfoWrapper>
        </Info>
    );
};

export default WeatherInfo;
