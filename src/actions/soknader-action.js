import actions from './actions';
import Soknad from '../store/models/soknad';

const alleSoknader = [
    new Soknad('Atlungstad Håndverksdestilleri AS', '820853032', '1668', 'Atlungstad', 'Jenst Jensen', 'Registrert', 1),
    new Soknad('Jåttå Gårdsbryggeri AS', '123456789', '0103', 'Jåtta', 'Erling Havnå', 'Registrert', 2),
    new Soknad('Sider AS', '921651686', '1337', 'Sandvika', 'Ola Nordmann', 'Innhenter skatt', 3),
    new Soknad('Stolt bryggeri AS', '912856291', '1166', 'Oslo', 'Kari Jaquesson', 'Registrert', 4),
    new Soknad('Storgata bryggeri AS', '921027672', '1808', 'Askim', 'Sven O. Høiby', 'Registrert', 5),
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