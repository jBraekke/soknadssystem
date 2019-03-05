import React from 'react'
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';

import ListItemText from '@material-ui/core/ListItemText';

import Grid from '@material-ui/core/Grid';

const Vedlegg = (props) => (
    <React.Fragment>
        <h1>Vedlegg fra søknad</h1>
        <Grid item xs={12} md={6}>

            <List>
                {
                    props.vedlegg.map((vedlegg, index) => {
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

Vedlegg.propTypes = {
    vedlegg: PropTypes.array
};

export default Vedlegg