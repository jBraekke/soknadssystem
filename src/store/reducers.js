import { combineReducers } from 'redux'
import user from './user'
import vedtak from './vedtak';
import menu from './menu';
import soknader from './soknader';
import logger from './logg';

export default combineReducers({
    user,
    vedtak,
    menu,
    soknader,
    logger
})