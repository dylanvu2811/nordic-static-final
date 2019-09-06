import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Loader extends PureComponent {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="box">
                        <div className="loader-icon"></div>
                    </div>
                </div>
            </div>
        );
    }
}

Loader.propTypes = {

};

export default Loader;