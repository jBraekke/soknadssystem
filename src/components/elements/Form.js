import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {

    static staticFn(verdi) {
        return verdi
    }

    constructor(props) {
        super(props);
        this.state = {
            formData: {},
        };
    }

    render() {
        return (<form className={this.props.className} onSubmit={event => this.props.onSubmit(event) } autoComplete="off">{this.props.children}</form>);
    }
}

Form.propTypes = {
    children: PropTypes.array,
};

// const mapStoreStateToProps = (store) => {
//     return {
//         lokaleprops: store.storeprop,
//     };
// };
// export default connect(mapStoreStateToProps)(Form);

export default Form;