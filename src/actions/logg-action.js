import moment from 'moment';
import actions from './actions';
import Logg from '../store/models/logg';

const alleLogger = [
    new Logg('Etterspurt mer informasjon'),
    new Logg('Søknad betalt'),
    new Logg('Søknad sendt inn'),
];

function hentLogger() {
    return (dispatch) => {
        dispatch({
            type: actions.HENT_LOGG,
            logg: alleLogger
        });
    }
}

function opprettLogg(beskjed) {

    var logg = new Logg(beskjed, moment().format('DD/MM/YYYY'), "Jørgen Brække")

    return (dispatch) => {
        dispatch({
            type: actions.OPPRETT_LOGG,
            logg
        });
    }
}

export { hentLogger, opprettLogg };