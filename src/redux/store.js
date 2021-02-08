import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {forecastWeatherReducer} from "./reducers/forecastWeatherReducer";
import {currentWeatherReducer} from "./reducers/currentWeatherReducer";

const reducers = combineReducers({
    forecastWeather: forecastWeatherReducer,
    currentWeather: currentWeatherReducer
});
const store = createStore(reducers, compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : null
))

export default store;