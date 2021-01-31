import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import themeLocalStorage from "./localStorage/themeLocalStorage";
import {getWeatherByCity} from "./api/api";


import "./index.scss";

const importTheme = async () => {
    if (themeLocalStorage.getTheme() === "light") return import("./scss/theme-light.scss");
    if (themeLocalStorage.getTheme() === "dark") return import("./scss/theme-dark.scss");
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App theme={themeLocalStorage.getTheme()}
                 importTheme={importTheme}
                 setTheme={themeLocalStorage.setTheme}
                 getWeatherByCity={getWeatherByCity}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);