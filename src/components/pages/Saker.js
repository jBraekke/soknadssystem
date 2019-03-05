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
import Search from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import { setMenu } from '../../actions/menu-action';
import menu from '../../constants/menu';


class Saker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'hello' };

        this.props.dispatch(setMenu(menu.finnSaker))
    }

    render() {
        let id = 0;
        function createData(name, post, contact, status, open) {
            id += 1;
            return { id, name, post, contact, status, open };
        }

        const rows = [
        ];

        return (

            <React.Fragment>
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

                <Paper styles={{
                    width: '100%',
                    marginTop: 3,
                    overflowX: 'auto'
                }}>
                    <Table>
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
                            {rows.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell>{row.post}</TableCell>
                                    <TableCell>{row.contact}</TableCell>
                                    <TableCell>{row.status}</TableCell>
                                    <TableCell align="right">
                                        <Link to={`/soknad/${row.open}`}><i class="fas fa-external-link-alt"></i>Åpne</Link>
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
        menu: store.menu
    }
}

Saker.propTypes = {
    menu: PropTypes.number,
};

export default connect(mapStoreToProps)(Saker);