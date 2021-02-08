const initialState = {
    selectedCity: {
        name: null,
        country: null,
        sunrise: null,
        sunset: null
    },
    currentWeather: null,
    icon2x: null,
    icon4x: null,
    isFetching: false
}

export const forecastWeatherReducer = (state = initialState, action) => {
    switch (action.type) {

    }
}