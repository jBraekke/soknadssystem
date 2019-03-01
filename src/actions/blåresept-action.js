import axios from 'axios';
import actions from './actions';
import Vedtak from '../store/models/blaaresept-vedtak';
import config from '../config/config';

function recievedVedtak(json) {
    const vedtak = new Vedtak(json.vedtak, false, true);
    return {
        type: actions.HENTETVEDTAK,
        vedtak
    }
}

function gettingVedtak() {
    return {
        type: actions.HENTETVEDTAK,
        vedtak: new Vedtak([], true, false)
    }
}

function getVedtak(formData) {
    return (dispatch) => {

        dispatch(gettingVedtak());

        axios.get(`${config.backend}/api/blaaresept`, { withCredentials: true })
            .then(response => {
                //todo fjern timeout, det er kun for show
                setTimeout(() => dispatch(recievedVedtak(response.data)), 1500)

            }).catch(error => {
                console.error('du har ikke tilgang');
            })
    }
}

export { getVedtak };
