import { combineReducers } from 'redux'
import user from './user'
import vedtak from './vedtak';
import menu from './menu';
import soknader from './soknader';

export default combineReducers({
    user,
    vedtak,
    menu,
    soknader
})