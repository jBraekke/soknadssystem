import actions from '../actions/actions';

const soknadReducer = (state = [], action) => {
    switch (action.type) {
        case actions.HENT_SOKNADER:
            return action.soknader
        case actions.HENT_MINE_SOKNADER:
            return action.soknader
        default:
            return state
    }
}

export default soknadReducer