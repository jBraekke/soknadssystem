import React from 'react'
import PropTypes from 'prop-types';


const Logg = (props) => (
    <section className="section is-fullwidth">
        <div className="bd-example">
            <section className="Logg">
                <div className="Logg-body">
                <div class="columns is-full">
                        <div className="column is-two-fifth">
                            <p className="title">
                                {props.title}
                            </p>
                            <p className="subtitle">
                                {props.subtitle}
                            </p>
                        </div>
                    </div>
                    <div class="columns is-full headerStyle">
                        <div class="column is-one-fifth headerStyle">
                        <p class="title is-6">Id</p>
                        </div>
                        <div class="column is-one-fifth headerStyle">
                        <p class="title is-6">Dato</p>
                        </div>
                        <div class="column is-three-fifth headerStyle">
                        <p class="title is-6">Beskrivelse</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
)

Logg.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
  };

export default Logg