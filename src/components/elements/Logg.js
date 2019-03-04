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
                    <div class="columns is-full">
                        <table class="table is-fullwidth is-striped is-hoverable">
                                <thead>
                                    <tr>
                                        <th>Dato</th>
                                        <th>Beskrivelse</th>
                                        <th>Rolle</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <p>05/03/2019</p>
                                        </td>
                                        <td>
                                            <p>Kari Nordmann etterspurte mer informasjon</p>
                                        </td>
                                        <td>
                                            <p>Virksomhet</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>04/03/2019</p>
                                        </td>
                                        <td>
                                            <p>Lars Nordmann la til filen vandel.pdf</p>
                                        </td>
                                        <td>
                                            <p>Saksbehandler</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>04/03/2019</p>
                                        </td>
                                        <td>
                                            <p>Søknaden ble sendt inn</p>
                                        </td>
                                        <td>
                                            <p>Virksomhet</p>
                                        </td>
                                    </tr>
                                </tbody>
                        </table>
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