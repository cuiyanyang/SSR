import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

const reducer = (state = {name: 'yyy'}, action) => {
    return {
        ...state,
        list: action.payload || [],
    };
}

const getStore = () => {
    return createStore(reducer, applyMiddleware(thunk))
}

export default getStore