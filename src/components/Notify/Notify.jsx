import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
class Notify extends PureComponent {
    render() {
        return (
            <div className="alert alert-success">
                <strong>{this.props.notify}</strong> 
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