import {getFavorites} from "./favoritesReducer";

const INITIALIZED_SUCCESS = 'initialization/INITIALIZED_SUCCESS';

const initialState = {
    initialized: false,
    isFetching: true
}

const initializationReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
                isFetching: false
            }
        default:
            return state
    }
}

const initializationSuccessActionCreator = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => {
    dispatch(getFavorites());
    dispatch(initializationSuccessActionCreator());
}

export default initializationReducer;