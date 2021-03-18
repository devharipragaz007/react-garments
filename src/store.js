import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers';
import {
    loadState,
    saveState
} from './localStorage'
const persistedState = loadState()

const store = createStore(
    appReducer,
    persistedState,
    applyMiddleware(thunk)
);

store.subscribe(() => {
    saveState(store.getState())
})

export default store;