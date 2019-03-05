import React from 'react'
import PropTypes from 'prop-types';


const Logg = (props) => (
    <section>
        <div>
            <h1>
                {props.title}
            </h1>
            <p className="subtitle">
                {props.subtitle}
            </p>
        </div>
        <div>
            <table class="table is-striped is-hoverable">
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
    </section>
)

Logg.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
};

export default Logg