import actions from './actions';
import Logg from '../store/models/logg';

const alleSoknader = [
    new Logg('Søknad sendt inn'),
    new Logg('Søknad betalt'),
    new Logg('Etterspurt mer informasjon'),
];

function hentSoknader() {
    return (dispatch) => {
        dispatch({
            type: actions.HENT_SOKNADER,
            soknader: alleSoknader
        });
    }
}

function filtrerSoknader(searchWord) {

    var searchResult = alleSoknader.filter((soknad) => soknad.org.indexOf(searchWord) > -1);

    return (dispatch) => {
        dispatch({
            type: actions.HENT_SOKNADER,
            soknader: searchWord.length > 0 ? searchResult : alleSoknader
        });
    }
}

export { hentSoknader, filtrerSoknader };