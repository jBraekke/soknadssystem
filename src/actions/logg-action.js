import actions from './actions';
import Logg from '../store/models/logg';

const alleLogger = [
    new Logg('Søknad sendt inn'),
    new Logg('Søknad betalt'),
    new Logg('Etterspurt mer informasjon'),
];

function hentLogger() {
    return (dispatch) => {
        dispatch({
            type: actions.HENT_LOGG,
            logg: alleLogger
        });
    }
}

function opprettLogg(searchWord) {

    var searchResult = alleSoknader.filter((soknad) => soknad.org.indexOf(searchWord) > -1);

    return (dispatch) => {
        dispatch({
            type: actions.HENT_SOKNADER,
            soknader: searchWord.length > 0 ? searchResult : alleSoknader
        });
    }
}

export { hentLogger, opprettLogg };