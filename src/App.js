import React from 'react';
import styled from 'styled-components';

import WeatherInfo from "./components/WeaherInfo/WeatherInfo";
import WeatherMain from "./components/WeaherMain/WeatherMain";

const Wrapper = styled.div`
  width: 730px;
  height: 500px;
  border-radius: 50px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  overflow: hidden;
`;

const App = () => {
    const [mustShowFavorite, setMustShowFavorite] = React.useState(false);

    return (
        <Wrapper>
            <WeatherInfo
                setMustShowFavorite={setMustShowFavorite}
                mustShowFavorite={mustShowFavorite}/>
            <WeatherMain mustShowFavorite={mustShowFavorite}/>
        </Wrapper>
    );
}

export default App;
