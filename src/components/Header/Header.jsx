import React from 'react';

const Header = ({onChangeTheme}) => {
    return (
        <header>
            <button onClick={onChangeTheme}>Change theme</button>
            <h1>Weather application</h1>
        </header>
    );
};

export default Header;
