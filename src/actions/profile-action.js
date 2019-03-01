import axios from 'axios';
import actions from './actions';
import User from '../store/models/user';
import config from '../config/config';
import { signOut } from '../actions/authenticate-action';

function recievedProfile(json) {
    const user = Object.assign(new User(true), json);
    return {
        type: actions.LOGIN,
        user
    }
}

function getProfile() {
    return (dispatch) => {
        axios.get(`${config.backend}/api/profile`, { withCredentials: true })
        .then(response => {
            dispatch(recievedProfile(response.data));
        }).catch(error => {
            dispatch(signOut())
        })
    }
}

export { getProfile };
