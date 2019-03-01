import actions from '../actions/actions';
import User from './models/user';

const user = (state = new User(), action) => {
    switch (action.type) {
      case actions.LOGIN:
        return Object.assign({}, state, action.user)
      case actions.SIGNOUT:
        return Object.assign({}, state, new User())
      default:
        return state
    }
  }
  
  export default user