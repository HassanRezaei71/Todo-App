import rootReducer from './rootReducers'
import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';

const middleware = [logger];


export default createStore(rootReducer,applyMiddleware(...middleware));