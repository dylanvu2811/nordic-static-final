import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Notify extends PureComponent {
    render() {
        return (
            <div>
                <p>{this.props.notify}</p>
            </div>
        );
    }
}

Notify.propTypes = {

};
const mapStateToProps = state => {
    return {
        notify: state.notify
    }
};
  
export default connect(mapStateToProps, null)(Notify);