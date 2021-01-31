import React from 'react';
import {useRouteMatch} from "react-router-dom";
import Preloader from "../../common/Preloader";
import {Button, Result} from "antd";

const WeatherInfo = ({getWeatherByCity}) => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [isError, setIsError] = React.useState(false);
    const [weatherInfo, setWeatherInfo] = React.useState({});

    const match = useRouteMatch("/:city");
    const city = match.params.city;

    React.useEffect(() => {
        getWeatherByCity(city)
            .then(data => {
                if (data.cod === 200) {
                    setWeatherInfo(data);
                } else {
                    setIsError(true);
                }
            })
            .then(() => setIsLoading(false));

        return () => setIsError(false);
    }, [getWeatherByCity, city])

    if (isLoading) return <Preloader/>
    if (isError) return <Result
        status="warning"
        title="Country is not found, please try again"
        extra={
            <Button type="primary" key="console">
                Go Console
            </Button>
        }
    />

    return (
        <div className="weather__info">
            <h1>{weatherInfo.name}</h1>
            <span>{weatherInfo.sys.country}</span>
            <span>Скорость ветра {weatherInfo.wind.speed}, {weatherInfo.wind.deg} градусов</span>
        </div>
    );
};

export default WeatherInfo;
