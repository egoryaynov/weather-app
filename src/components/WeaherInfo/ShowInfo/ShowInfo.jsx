import React from 'react';

const ShowInfo = ({currentCity}) => {
    return (
        <div>
            <img src={currentCity.weather[0].icon} alt={currentCity.weather[0].main}/>
            <span>{currentCity.date.weekDay}</span>
        </div>
    );
};

export default ShowInfo;
