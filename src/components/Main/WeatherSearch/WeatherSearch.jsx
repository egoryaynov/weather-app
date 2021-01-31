import React from 'react';
import {Input} from "antd";

const {Search} = Input;

const WeatherSearch = ({onSearch}) => {
    const [searchValue, setSearchValue] = React.useState("");

    const onChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <div className="main__search">
            <Search placeholder="Enter your city...."
                    onSearch={onSearch}
                    value={searchValue}
                    onChange={onChange}
                    enterButton
                    autofocus="true"/>
        </div>
    );
}

export default WeatherSearch;
