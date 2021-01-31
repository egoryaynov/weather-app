import React from 'react';
import {Button} from "antd";

const Header = ({theme, onChangeTheme}) => {
    return (
        <header className="header">
            <Button type="primary" onClick={onChangeTheme}>
                Switch theme to {theme === "dark" ? "light" : "dark"}
            </Button>
        </header>
    );
};

export default Header;
