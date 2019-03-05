import moment from 'moment';
import actions from './actions';
import Logg from '../store/models/logg';

const alleLogger = [
    new Logg('Etterspurt mer informasjon', moment().subtract(1, 'day').format('DD/MM/YYYY')),
    new Logg('Søknad betalt', moment().subtract(2, 'day').format('DD/MM/YYYY')),
    new Logg('Søknad sendt inn', moment().subtract(3, 'day').format('DD/MM/YYYY')),
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

    var logg = new Logg(beskjed, moment().format('DD/MM/YYYY'), "Jørgen Brække", moment().format('hh:mm:ss'))

    return (dispatch) => {
        dispatch({
            type: actions.OPPRETT_LOGG,
            logg
        });
    }
}

export { hentLogger, opprettLogg };