import React from 'react';

const ShowInfo = ({currentCity}) => {
    return (
        <>
            <img src={currentCity.weather[0].icon} alt={currentCity.weather[0].main}/>
            <span>{currentCity.date.weekDay}</span>
        </>
    );
};

export default ShowInfo;
