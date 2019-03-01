import React from 'react'
import PropTypes from 'prop-types';
import Background from '../../style/img/logo-fb.png';

const style = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: '4.25rem 0 4.563rem',
}

const Helfo = (props) => (
    <section className="section is-fullwidth" style={style}>
        {props.children}
    </section>
)

Helfo.propTypes = {
    children: PropTypes.object,
};

export default Helfo