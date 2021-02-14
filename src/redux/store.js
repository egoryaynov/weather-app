import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";

import forecastWeatherReducer from "./reducers/forecastWeatherReducer";
import currentWeatherReducer from "./reducers/currentWeatherReducer";
import favoritesReducer from "./reducers/favoritesReducer";
import initializationReducer from "./reducers/initializationReducer";

const reducers = combineReducers({
    initialization: initializationReducer,
    forecastWeather: forecastWeatherReducer,
    currentWeather: currentWeatherReducer,
    favorites: favoritesReducer,
});
const store = createStore(reducers, compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store;