import actions from './actions';
import User from '../store/models/user';

function loggedIn() {

    const user = new User();
    return {
        type: actions.LOGIN,
        user
    }
}

function signOut() {
    return {
        type: actions.SIGNOUT,
    };
}

function login() {
    return (dispatch) => {
        setTimeout(() => {
            return dispatch(loggedIn());
        }, 500);
    }
}

export { login, signOut };
