import actions from '../actions/actions';

const loggReducer = (state = [], action) => {
    switch (action.type) {
        case actions.HENT_LOGG:
            return action.logg
        case actions.OPPRETT_LOGG:
            state.push(action.logg);
            return state
        default:
            return state
    }
}

export default loggReducer