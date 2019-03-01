import { combineReducers } from 'redux'
import user from './user'
import vedtak from './vedtak';
import menu from './menu';

export default combineReducers({
    user,
    vedtak,
    menu
})