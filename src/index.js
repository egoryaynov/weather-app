import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import themeLocalStorage from "./localStorage/themeLocalStorage";

ReactDOM.render(
    <React.StrictMode>
        <App theme={themeLocalStorage.getTheme()} setTheme={themeLocalStorage.setTheme}/>
    </React.StrictMode>,
    document.getElementById('root')
);