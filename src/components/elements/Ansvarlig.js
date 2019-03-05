import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'

import { opprettLogg } from '../../actions/logg-action';


class Ansvarlig extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tattansvar: false,
        };
    }

    handleClick() {
        this.setState({ tattansvar: true })
        this.props.dispatch(opprettLogg('Jørgen Brække har tatt ansvaret for søknaden'));
    }

    render() {
        return (
            <React.Fragment>
                <h1>Ansvarlig</h1>
                <p>
                    {this.state.tattansvar ? `Jørgen Brække har tatt søknaden` : 'Ingen har tatt ansvaret'}
                </p>
                <br />

                {
                    this.state.tattansvar ?
                        <Button variant="contained" onClick={() => {}}>
                            Ta over ansvaret
                        </Button> :
                        <Button variant="contained" color="secondary" onClick={() => this.handleClick()}>
                            Ta ansvaret
                        </Button>
                }
            </React.Fragment>
        );
    }
}

export default connect()(Ansvarlig);