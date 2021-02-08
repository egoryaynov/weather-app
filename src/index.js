import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";

import './fonts/fonts.css';
import {GlobalStyles} from "./styles/GlobalStyles";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <GlobalStyles/>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);