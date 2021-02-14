import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import styled from 'styled-components';

import WeatherInfo from "./components/WeaherInfo/WeatherInfo";
import WeatherMain from "./components/WeaherMain/WeatherMain";

import {getIsFetchingSelector} from "./redux/selectors/initializationSelector";
import Preloader from "./components/common/Preloader";
import {initializeApp} from "./redux/reducers/initializationReducer";

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
    const isFetching = useSelector(getIsFetchingSelector);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(initializeApp());
    }, [dispatch])

    if (isFetching) return <Preloader/>

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
