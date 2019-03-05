import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hentLogger } from '../../actions/logg-action'

class Logg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            henterData: true,
        };
    }

    componentWillMount() {
        window.scrollTo(0, 0);
        if (this.props.logger.length === 0) {
            this.props.dispatch(hentLogger());
        }
    }

    render() {
        return (
            <section>
                <div>
                    <h1>
                        {this.props.title}
                    </h1>
                    <br />
                    <p className="subtitle">
                        {this.props.subtitle}
                    </p>
                </div>
                <div>
                    <table className="table is-striped is-hoverable">
                        <thead>
                            <tr>
                                <td>Dato</td>
                                <td>Beskrivelse</td>
                                <td>Opprettet av</td>
                            </tr>
                        </thead>
                        <tbody>
                            {(this.props.logger || []).map((logg, index) => {
                                return <tr key={index}>
                                    <td title={`Klokka ${logg.tid}`}>
                                        <p>{logg.opprettet}</p>
                                    </td>
                                    <td>
                                        <p>{logg.beskjed}</p>
                                    </td>
                                    <td>
                                        <p>{logg.opprettetAv}</p>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        )
    }
}

const mapStoreStateToProps = (store) => {
    return {
        logger: store.logger,
    };
};

Logg.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
};

export default connect(mapStoreStateToProps)(Logg);