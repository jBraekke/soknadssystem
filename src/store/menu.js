import actions from '../actions/actions';

const user = (state = 1, action) => {
    switch (action.type) {
      case actions.CHANGEMAINMENU:
        return action.level;
      default:
        return state
    }
  }
  
  export default user