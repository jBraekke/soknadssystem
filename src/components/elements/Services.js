import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Service from './Service';
import { services } from '../../actions/services-action';

class Services extends React.Component {

    handleProfileInfo() {

        const user = this.props.user;

        if (user.authenticated) {
            return (<div className="column is-one-quarter">
                <div style={{background: 'white', height: '100%', padding : 15}}>
                    <p><strong>{user.navn}</strong></p>
                    <br />
                    <p>{user.rolle} siden {user.rollesiden}</p>
                    <br />
                    <p>{user.praksis}</p>
                    <p>{user.adresse}</p>
                    <p>{user.postadresse}</p>
                    <br />
                    <p>Telefonnummer {user.tlf}</p>
                    <p>Bankkontonummer {user.konto}</p>
                </div>
            </div>)
        }

        return null;
    }

    render() {
        return (
            <div className="container">
                <div className="columns transition">
                    <div className="column">
                        <ul className="services columns is-multiline">
                            {
                                services.map((service, i) => {
                                    return (
                                        <Service
                                            key={i}
                                            icon={service.icon}
                                            name={service.name}
                                            route={service.route}
                                            description={service.description}
                                        />);
                                })
                            }
                        </ul>
                    </div>
                    {this.handleProfileInfo()}
                </div>
            </div>
        );
    }
}

const mapStoreStateToProps = (store) => {
    return {
        user: store.user,
    };
};

Services.propTypes = {
    user: PropTypes.object,
};

export default connect(mapStoreStateToProps)(Services);