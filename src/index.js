import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App theme={"dark"}/>
    </React.StrictMode>,
    document.getElementById('root')
);