import React from 'react';
import {Button, Input} from "antd";

const WeatherSearch = () => {
    return (
        <>
            <Input type={"search"}/>
            <Button type={"primary"}>Search</Button>
        </>
    );
}

export default WeatherSearch;
