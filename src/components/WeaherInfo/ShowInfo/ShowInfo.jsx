import React from 'react';
import Preloader from "../../common/Preloader";

const ShowInfo = ({currentCity, isFetching}) => {
    if (isFetching) return <Preloader/>

    return (
        <>
            <img src={currentCity.weather[0].icon} alt={currentCity.weather[0].main}/>
            <span>{currentCity.date.weekDay}</span>
        </>
    );
};

export default ShowInfo;
