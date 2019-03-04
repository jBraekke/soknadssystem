import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';

import ListItemText from '@material-ui/core/ListItemText';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';

import Logg from '../elements/Logg';
import './style/Søknader.css';

import { hentSoknader } from '../../actions/soknader-action';

class Søknad extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'hello' };
    }

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
                    <h1>Vedlegg</h1>
                    <Grid item xs={12} md={6}>

                        <List>
                            {
                                this.generateVedlegg(søknad).map(vedlegg => {
                                    return <ListItem>
                                        <ListItemIcon>
                                            <i class={vedlegg.icon}></i>
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
                    <h1>Plan</h1>
                </React.Fragment>
            );
        }

        return null;
    }


    render() {
        return (
            <div>
                <div class="columns">
                    <div class="column is-two-thirds">
                        <div>
                            {
                                this.visSøknad()
                            }
                        </div>
                    </div>
                    <div class="column is-one-thirds borderLeft">
                        <Logg title="Logg" subtitle="Søknadens siste handlinger"></Logg>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStoreToProps = store => {
    return {
        søknader: store.soknader
    }
}
Søknad.propTypes = {
    soknader: PropTypes.array,
};
export default connect(mapStoreToProps)(Søknad);