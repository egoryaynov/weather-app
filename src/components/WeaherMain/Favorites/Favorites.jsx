import React from 'react';
import Preloader from "../../common/Preloader";
import {useSelector} from "react-redux";
import {getFavoritesWeatherSelector, getIsFetchingSelector} from "../../../redux/selectors/favoritesSelector";

const Favorites = ({favorites, getFavoritesWeather}) => {
    const isFetching = useSelector(getIsFetchingSelector);
    const favoritesWeather = useSelector(getFavoritesWeatherSelector);
    React.useEffect(() => {
        getFavoritesWeather(favorites, favoritesWeather);
    }, [favorites])

    if (isFetching) return <Preloader/>

    return (
        <div>
            <h2 className='title'>Favorites</h2>
        </div>
    );
};

export default Favorites;
