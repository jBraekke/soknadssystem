import actions from '../actions/actions';
import Vedtak from './models/blaaresept-vedtak';

const vedtakReducer = (state = new Vedtak(), action) => {
    switch (action.type) {
        case actions.HENTERVEDTAK:
            return Object.assign({}, state, action.vedtak)
        case actions.HENTETVEDTAK:
            return Object.assign({}, state, action.vedtak)
        case actions.CLEANVEDTAK:
            return Object.assign({}, state, new Vedtak())
        default:
            return state
    }
}

export default vedtakReducer