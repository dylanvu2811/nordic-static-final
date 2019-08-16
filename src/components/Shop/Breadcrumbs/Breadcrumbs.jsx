import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Breadcrumbs.scss'; 
import { Link } from 'react-router-dom';

class Breadcrumbs extends PureComponent {
    render() {
        return (
            <div className="breadcrumbs d-flex flex-row align-items-center">
                <ul>
                    <li><Link exact to="/">Home</Link></li>
                    <li className="active"><Link exact to="/shop"><i className="fa fa-angle-right" aria-hidden="true" /> Shop </Link></li>
                    
                </ul>
            </div>
        );
    }
}

Breadcrumbs.propTypes = {

};

export default Breadcrumbs;