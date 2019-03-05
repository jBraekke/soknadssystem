import React from 'react'
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const Søknadsskjema = (props) => (
    <React.Fragment>
        <h1>Søknad <small>({props.søknad.status})</small></h1>
        <br />
        <div className="columns">
            <div className="column is-two-quarters">
                <TextField value={props.søknad.navn} fullWidth label="Virksomhet" />
            </div>
            <div className="column is-one-quarters">
                <TextField value={props.søknad.org} label="Organisasjonsnummer" />
            </div>
        </div>
        <div className="columns">
            <div className="column is-two-quarters">
                <TextField value={props.søknad.kontakt} fullWidth label="Kontakt" />
            </div>
            <div className="column is-one-quarters">
                <TextField value={props.søknad.tlf} label="Telefon" />
            </div>
        </div>
        <div className="columns">
            <div className="column is-half">
                <TextField value={props.søknad.epost} fullWidth label="Epost" />
            </div>
        </div>
        <div className="columns">
            <div className="column is-two-quarters">
                <TextField value={props.søknad.opprettet} fullWidth label="Opprettet" />
            </div>
            <div className="column is-one-quarters">
                <TextField value={`${props.søknad.postnr} - ${props.søknad.poststed}`} label="Poststed" />
            </div>
        </div>
    </React.Fragment>
);

Søknadsskjema.propTypes = {
    søknad: PropTypes.object
};

export default Søknadsskjema