import React from 'react'
import PropTypes from 'prop-types';

const Hero = (props) => (
    <section className="section is-fullwidth">
        <div className="bd-example">
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <p className="title">
                            {props.title}
                        </p>
                        <p className="subtitle">
                            {props.subtitle}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    </section>
)

Hero.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
  };

export default Hero