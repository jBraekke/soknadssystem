import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import Hero from '../elements/Hero';
import Form from '../elements/Form';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl'

import CircularProgress from '@material-ui/core/CircularProgress';


import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';


import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { serializeToObject } from '../../utils/form'
import { getVedtak } from '../../actions/blåresept-action';

import MineSøknader from './MineSøknader';

const spraak = {
    header: 'Vedtak',
};

class Vedtak extends React.Component {

    static staticFunksjon(verdi) {
        return verdi
    }

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: 'Legemiddel',
            festId: '',
            expanded: null
        };
    }

    componentWillMount() {
        window.scrollTo(0, 0);
        document.title = spraak.header;
    }

    handleChange(value, state) {
        this.setState({ [state]: value })
    }

    handleSubmit(event) {
        event.preventDefault();
        var formData = serializeToObject(event.target.elements);
        this.props.dispatch(getVedtak(formData));
    }

    visResultat() {
        if (this.props.vedtak.henter) {
            return (<div className="center-text">
                <br />
                <CircularProgress />
                <p>Henter vedtak.. </p>
            </div>)
        }

        if (this.props.vedtak.hentet) {
            return (<div>
                Antall søk: {this.props.vedtak.liste.length}
            </div>)
        }

        return null;
    }

    handleExpandChange(panel) {
        this.setState({
            expanded: panel,
        });
    };

    visListe() {

        const { expanded } = this.state;

        const styles = {
            heading: {
            },
            secondaryHeading: {

            },
            icon: {
                verticalAlign: 'bottom',
                height: 20,
                width: 20,
            },
            details: {
                alignItems: 'center',
            },
            column: {
                flexBasis: '33.33%',
            },
            helper: {
                borderLeft: `2px solid red`,
                padding: '5px 10px',
            },
            link: {
                color: 'red',
                textDecoration: 'none',
                '&:hover': {
                    textDecoration: 'underline',
                },
            },
        };

        return (
            <div>
                {
                    this.props.vedtak.liste.map((v, index) => {
                        return (<ExpansionPanel key={index} expanded={expanded === `panel${index}`} onChange={() => this.handleExpandChange(`panel${index}`)}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <ListItem>
                                    <Avatar>
                                        <i className="fas fa-prescription-bottle-alt"></i>
                                    </Avatar>
                                    <ListItemText primary={v.refusjonshjemmel} secondary={`Fra ${moment(v.gyldigFraDato).format('DD/MM/YYYY')}`} />
                                </ListItem>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails style={{ display: 'block' }}>
                                <div className={styles.title} color="textSecondary" gutterBottom>
                                    Preparatinformasjon
                                </div>
                                <p><strong>Varenavn </strong> {v.preparatinformasjon[0].varenavn}</p>
                                <p><strong>Form </strong> {v.preparatinformasjon[0].form}</p>
                                <p><strong>ICD10 kode </strong> {v.preparatinformasjon[0].refusjonskodeICD10}</p>
                                <br />
                                <a href={v.vedtaksdokumentUrl[0]} target="_blank">Se vedtaksdokument <i className="far fa-file-pdf"></i></a>

                            </ExpansionPanelDetails>
                        </ExpansionPanel>)
                    })
                }
            </div>
        );
    }

    visForm() {
        return (<Form className="columns is-desktop" onSubmit={event => this.handleSubmit(event)}>
            <div className="column form-element">
                <FormControl style={{ width: '100%' }}>
                    <InputLabel htmlFor="fnr">Fødselsnummer</InputLabel>
                    <Input id="fnr" name="fnr" value={this.state.name} onChange={event => this.handleChange(event.target.value, 'name')} />
                </FormControl>
            </div>
            <div className="column form-element">
                <FormControl style={{ width: '100%' }}>
                    <InputLabel htmlFor="vedtakstype">Vedtakstype</InputLabel>
                    <Select
                        id="vedtakstype"
                        value={this.state.type}
                        name="type"
                        onChange={event => this.handleChange(event.target.value, 'type')}
                        repositionOnUpdate={false}
                        style={{ padding: '0px 0px 0px 0px' }}
                    >
                        <MenuItem value="Legemiddel">Legemiddel</MenuItem>
                        <MenuItem value="Næringsmiddel">Næringsmiddel</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="column form-element">
                <FormControl style={{ width: '100%' }}>
                    <InputLabel htmlFor="festId">FestId</InputLabel>
                    <Select
                        id="festId"
                        value={this.state.festId}
                        name="festId"
                        onChange={event => this.handleChange(event.target.value, 'festId')}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="1f60855a-b527-42fb-b117-8f2fecc71776">Abstral</MenuItem>
                        <MenuItem value="Næringsmiddel">Asacol</MenuItem>
                        <MenuItem value="ID_FBC4BD2D-CC61-4000-B5BB-65361B6DD780">Clopidogrel Actavis</MenuItem>
                        <MenuItem value="ID_01667e57-6c4b-4199-863e-347194ce6ed0">Remicade</MenuItem>
                        <MenuItem value="ID_e44313d4-00eb-42ac-bfd4-c010f4167fad">Xanor</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="form-element">
                <FormControl>
                    <Button type="submit" style={{ marginTop: 25 }} variant="contained" color="primary">
                        Søk
            </Button>
                </FormControl>
            </div>
        </Form>);
    }

    visSiden() {
        return (
            <div>
                <Hero title="Vedtakspørring legemidler" subtitle="Søk etter eksisterende legemiddelvedtak"></Hero>
                <div className="container">
                    {this.visForm()}
                </div>
                <div className="container center-stuff search-result">
                    {this.visListe()}
                    <br />
                    {this.visResultat()}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.props.user.authenticated ? this.visSiden(): <MineSøknader />}
            </div>
        );
    }
}

const mapStoreStateToProps = (store) => {
    return {
        user: store.user,
        vedtak: store.vedtak,
    };
};

Vedtak.propTypes = {
    user: PropTypes.object,
    vedtak: PropTypes.object,
    dispatch: PropTypes.func,
};

export default connect(mapStoreStateToProps)(Vedtak);