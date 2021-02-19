import React from 'react';
import styled from "styled-components";

const MainImageWrapper = styled.div`
  padding: 0;
  width: 200px;
  height: 200px;
`;

const MainImage = ({currentWeather}) => {
    return (
        <MainImageWrapper>
            <img src={currentWeather.icon4x} alt={currentWeather.main}/>
        </MainImageWrapper>
    );
};

export default MainImage;
