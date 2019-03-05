import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import TextField from '@material-ui/core/TextField'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import { hentSoknader, filtrerSoknader } from '../../actions/soknader-action';
import Search from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import './style/Søknader.css';

import Statistikk from '../elements/Statistikk';


class Søknader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'hello' };
    }

    componentWillMount() {
        this.props.dispatch(hentSoknader());
    }

    handleSearch(searchTxt) {
        this.props.dispatch(filtrerSoknader(searchTxt));
    }

    render() {

        return (
            <React.Fragment>
                <div className="columns">
                    <div className="column is-two-thirds" style={{paddingTop: "50px"}}>
                        <TextField
                            style={{ padding: '13px 20px 7px', width: "500px" }}
                            placeholder="Søk etter organisasjonsnummer"
                            fullWidth
                            margin="normal"
                            onChange={(e) => this.handleSearch(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <Search/>
                                  </InputAdornment>
                                ),
                              }}
                        />
                    </div>
                    <div className="column is-two-thirds">
                              <Statistikk
                                registrert="80%"
                                inhentetSkatt="20%"
                                opprettetBevilling="0%"
                                />
                        
                    </div>
                </div>
                <Paper styles={{
                    width: '100%',
                    marginTop: 3,
                    overflowX: 'auto'
                }}>
                    <Table style={{ minWidth: 700 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Organisasjon</TableCell>
                                <TableCell>Poststed</TableCell>
                                <TableCell>Kontakt</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.soknader.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.navn} ({row.org})
                                    </TableCell>
                                    <TableCell>{row.poststed} - {row.postnr}</TableCell>
                                    <TableCell>{row.kontakt}</TableCell>
                                    <TableCell>{row.status}</TableCell>
                                    <TableCell align="right">

                                        <Link className="åpneKnapp" color="primary" to={`/soknad/${row.id}`}>Åpne</Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </React.Fragment >
        );
    }
}

const mapStoreToProps = store => {
    return {
        menu: store.menu,
        soknader: store.soknader
    }
}

Søknader.propTypes = {
    menu: PropTypes.number,
};

export default connect(mapStoreToProps)(Søknader);