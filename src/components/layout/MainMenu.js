import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

import { setMenu } from '../../actions/menu-action';
import routes from '../../infrastruktur/routes';


class MainMenu extends React.Component {

    handleChange(value) {
        console.log(value);
        this.props.dispatch(setMenu(value))
    }

    render() {
        return (
            <div style={{ height: 61 }}>
                <AppBar position="static" style={{ background: '#f7f6f6', color: 'black' }}>
                    <div className="container">
                        <Tabs value={this.props.menu} indicatorColor="secondary" onChange={(event, value) => this.handleChange(value)}>
                            <Tab label="Mine søknader" to={routes.mineSøknader} component={Link} />
                            <Tab label="Finn søknader" to={routes.home} component={Link} />
                            <Tab label="Ferdigstilte søknader" to={routes.saker} component={Link} />
                        </Tabs>
                    </div>
                </AppBar>
            </div>
        );
    }
}

const mapStoreStateToProps = (store) => {
    return {
        menu: store.menu,
    };
};

export default connect(mapStoreStateToProps)(MainMenu);

MainMenu.propTypes = {
    menu: PropTypes.number,
    dispatch: PropTypes.func,
};