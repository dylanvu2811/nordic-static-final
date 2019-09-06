import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Breadcrumbs.scss'; 
import { Link } from 'react-router-dom';

class Breadcrumbs extends PureComponent {
    render() {
        return (
          <div className="row">
            <div className="col">
              <div className="breadcrumbs d-flex flex-row align-items-center">
                <ul>
                  <li><Link exact to="/">Home</Link></li>
                  <li className="active"><Link exact to="/contact"><i className="fa fa-angle-right" aria-hidden="true" />Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>

        );
    }
}

Breadcrumbs.propTypes = {

};

export default Breadcrumbs;