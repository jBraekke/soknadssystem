import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';

import ListItemText from '@material-ui/core/ListItemText';

import Grid from '@material-ui/core/Grid';

import Steps from '../elements/Steps';

import Logg from '../elements/Logg';
import './style/Søknad.css';

import { hentSoknader } from '../../actions/soknader-action';

class Søknad extends React.Component {
    componentWillMount() {
        if (this.props.søknader.length === 0) {
            this.props.dispatch(hentSoknader());
        }
    }

    generateVedlegg(søknad) {
        const repitisjoner = Math.floor(Math.random() * 10);

        let vedlegg = [];

        for (let index = 0; index < repitisjoner; index++) {
            if (index % 2 === 1) {
                vedlegg.push({
                    icon: 'far fa-file-pdf',
                    title: `${søknad.navn} planløsning ${index}.pdf`
                })
            } else {
                vedlegg.push({
                    icon: 'far fa-file-word',
                    title: `${søknad.navn} plan.word`
                })
            }
        }

        return vedlegg;

    }

    visSøknad() {
        const { id } = this.props.match.params;
        var søknad = this.props.søknader.filter(søknad => søknad.id == id)[0];

        if (søknad) {
            return (
                <React.Fragment>
                    <h1>Prosess</h1>
                    <Steps />
                    <br />
                    <h1>Søknad <small>({søknad.status})</small></h1>
                    <br />
                    <div className="columns">
                        <div className="column">
                            <TextField value={søknad.navn} fullWidth label="Virksomhet" />
                        </div>
                        <div className="column">
                            <TextField value={søknad.org} fullWidth label="Organisasjonsnummer" />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-two-thirds">
                            <TextField value={søknad.kontakt} fullWidth label="Kontakt" />
                        </div>
                        <div className="column is-one-thirds">
                            <TextField value={søknad.tlf} fullWidth label="Telefon" />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <TextField value={søknad.epost} fullWidth label="Epost" />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-two-thirds">
                            <TextField value={søknad.opprettet} fullWidth label="Opprettet" />
                        </div>
                        <div className="column is-one-thirds">
                            <TextField value={`${søknad.postnr} - ${søknad.poststed}`} fullWidth label="Poststed" />
                        </div>
                    </div>
                    <br />
                    <h1>Vedlegg fra søknad</h1>
                    <Grid item xs={12} md={6}>

                        <List>
                            {
                                this.generateVedlegg(søknad).map((vedlegg, index) => {
                                    return <ListItem key={index}>
                                        <ListItemIcon>
                                            <i className={vedlegg.icon}></i>
                                        </ListItemIcon>
                                        <a href="">
                                            <ListItemText
                                                primary={vedlegg.title}
                                            />
                                        </a>
                                    </ListItem>
                                })
                            }

                        </List>
                    </Grid>
                </React.Fragment>
            );
        }

        return null;
    }


    render() {
        return (
            <div>
                <div className="columns">
                
                    <div className="column is-two-thirds">
                        <div>
                            {
                                this.visSøknad()
                            }
                        </div>
                    </div>
                    <div className="column is-one-thirds borderLeft">
                        <Logg title="Hendelseslogg" subtitle=" "></Logg>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStoreToProps = store => {
    return {
        søknader: store.soknader,
        logger: store.logger
    }
}
Søknad.propTypes = {
    soknader: PropTypes.array,
};
export default connect(mapStoreToProps)(Søknad);

