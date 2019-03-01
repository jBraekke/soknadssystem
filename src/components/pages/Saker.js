import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

let id = 0;
function createData(name, post, contact, status, open) {
    id += 1;
    return { id, name, post, contact, status, open };
}

const rows = [
    createData('Atlungstad Håndverksdestilleri AS (820853032)', 'Atlungstad - 1668', 'Jens Jensen', 'Registrert', 1),
    createData('Jåttå Gårdsbryggeri AS (123456789)', 'Jåtta - 0103', 'Erling Havnå', 'Innhenter vandel', 2),
    createData('Sider AS (921651686)', 'Sandvika - 1337', 'Ola Nordmann', 'Innhenter skatt', 3),
    createData('Stolt bryggeri AS (912856291)', 'Oslo - 1166', 'Kari Jaquesson', 'Registrert', 4),
    createData('Storgata bryggeri AS (921027672)', 'Askim - 1808', 'Sven O. Høiby', 'Registrert', 5),
];

function SimpleTable(props) {
    const { classes } = props;

    return (

        <React.Fragment>
            <TextField
                style={{ padding: '13px 44px 7px' }}
                placeholder="Søk i saker"
                fullWidth
                margin="normal"
            />


            <Paper className={classes.root}>
                <Table className={classes.table}>
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
                                    <Link to={`/soknad/${row.open}`}>Åpne</Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </React.Fragment>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);