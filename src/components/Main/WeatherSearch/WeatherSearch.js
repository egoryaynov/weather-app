import React from 'react';
import {Button, Input} from "antd";

const WeatherSearch = ({onSearch}) => {
    const [searchValue, setSearchValue] = React.useState("");

    const onChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className="main__search">
            <Input placeholder="Enter your city...." type={"search"} value={searchValue} onChange={onChange}/>
            <Button onClick={() => onSearch(searchValue)} type={"primary"}>Search</Button>
        </div>
    );
}

export default WeatherSearch;
