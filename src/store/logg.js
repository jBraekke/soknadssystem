import actions from '../actions/actions';

const loggReducer = (state = [], action) => {
    switch (action.type) {
        case actions.HENT_LOGG:

            action.logg.forEach(logg => state.push(logg));

            return state;
        case actions.OPPRETT_LOGG:
            return [ action.logg, ...state];
        default:
            return state
    }
}

export default loggReducer