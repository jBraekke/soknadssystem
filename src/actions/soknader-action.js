import routes from '../infrastruktur/routes';
import actions from './actions';

const services = [
    {
        name: 'Mine søknader',
        description: 'Søknader du jobber med',
        icon: 'fas fa-file',
        route: routes.profile
    },
    {
        name: 'Finn søknader',
        description: 'Søk i alle søknader',
        icon: 'fas fa-search',
        route: routes.vedtak
    },
    {
        name: 'Finn saker',
        description: 'Finn alle saker',
        icon: 'fas fa-check-circle',
        route: routes.reseptsonkad
    }
];


function hentSoknader() {
    return (dispatch) => {
        dispatch({
            type: actions.CHANGEMAINMENU,
            level: index
        });
    }
}

export { services, hentSoknader };
