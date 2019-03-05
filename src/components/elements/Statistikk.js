import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Statistikk extends React.Component {



    render() {
        return (
            <table>
                <tbody>
                <tr>
                    <td className="stats"><h1>{this.props.registrert}</h1></td>
                    <td className="stats"><h1>{this.props.inhentetSkatt}</h1></td>
                    <td className="stats"><h1>{this.props.opprettetBevilling}</h1></td>
                </tr>
                <tr>
                    <td className="stats"><h2>Registrert</h2></td>
                    <td className="stats"><h2>Innhenter skatt</h2></td>
                    <td className="stats"><h2>Opprettet bevilling</h2></td>
                </tr> 
                </tbody>
            </table>
        )
    }
}

const mapStoreStateToProps = (store) => {
    return {
        statistikk: store.statistikk,
    };
};

Statistikk.propTypes = {
    registrert: PropTypes.string,
    inhentetSkatt: PropTypes.string,
    opprettetBevilling: PropTypes.string
};

export default connect(mapStoreStateToProps)(Statistikk);
