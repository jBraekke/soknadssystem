import actions from './actions';

function setMenu(index) {
    return (dispatch) => {
        dispatch({
            type: actions.CHANGEMAINMENU,
            level: index
        });
    }
}

export { setMenu };
