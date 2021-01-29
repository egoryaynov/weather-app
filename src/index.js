import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import themeLocalStorage from "./localStorage/themeLocalStorage";

const importTheme = async () => {
    if (themeLocalStorage.getTheme() === "light") return import("./scss/theme-light.scss");
    if (themeLocalStorage.getTheme() === "dark") return import("./scss/theme-dark.scss");
}

ReactDOM.render(
    <React.StrictMode>
        <App theme={themeLocalStorage.getTheme()} importTheme={importTheme} setTheme={themeLocalStorage.setTheme}/>
    </React.StrictMode>,
    document.getElementById('root')
);