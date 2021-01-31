import React from 'react';
import {Button} from "antd";
import {getWeatherByCity} from "../../api/api";

const Header = ({theme, onChangeTheme}) => {
    return (
        <header>
            <Button type="primary" onClick={onChangeTheme}>
                Switch theme to {theme === "dark" ? "light" : "dark"}
            </Button>
            <Button onClick={() => getWeatherByCity("London")}>Get london weather)</Button>
        </header>
    );
};

export default Header;
