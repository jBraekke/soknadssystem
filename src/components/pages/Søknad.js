import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import Steps from '../elements/Steps';

import Logg from '../elements/Logg';
import Søknadsskjema from '../elements/Søknadsskjema';
import Vedlegg from '../elements/Vedlegg';
import Ansvarlig from '../elements/Ansvarlig';
import './style/Søknad.css';

import { hentSoknader } from '../../actions/soknader-action';

class Søknad extends React.Component {

    componentWillMount() {
        if (this.props.søknader.length === 0) {
            this.props.dispatch(hentSoknader());
        }
    }

    generateVedlegg(søknad) {
        const repitisjoner = Math.floor(Math.random() * 10) + 1;

        let vedlegg = [];

        for (let index = 0; index < repitisjoner; index++) {
            if (index % 2 === 1) {
                vedlegg.push({
                    icon: 'far fa-file-pdf',
                    title: `${søknad.navn} planløsning ${index}.pdf`
                })
            } else {
                vedlegg.push({
                    icon: 'far fa-file-word',
                    title: `${søknad.navn} plan.word`
                })
            }
        }

        return vedlegg;

    }

    visSøknad() {
        const { id } = this.props.match.params;
        var søknad = this.props.søknader.filter(søknad => søknad.id == id)[0];

        if (søknad) {
            return (
                <React.Fragment>
                    <h1>Prosess</h1>
                    <Steps />
                    <br />
                    <Søknadsskjema søknad={søknad} />
                    <br />
                    <Vedlegg vedlegg={this.generateVedlegg(søknad)} />
                </React.Fragment>
            );
        }

        return null;
    }


    render() {
        return (
            <div>
                <div className="columns">
                
                    <div className="column is-two-thirds">
                        <div>
                            {
                                this.visSøknad()
                            }
                        </div>
                    </div>
                    <div className="column is-one-thirds borderLeft">
                        <Ansvarlig />
                        <Logg title="Hendelseslogg" subtitle=""></Logg>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStoreToProps = store => {
    return {
        søknader: store.soknader,
        logger: store.logger
    }
}
Søknad.propTypes = {
    soknader: PropTypes.array,
};
export default connect(mapStoreToProps)(Søknad);

