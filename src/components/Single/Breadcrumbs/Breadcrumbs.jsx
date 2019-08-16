import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Breadcrumbs.scss';
import { Link } from 'react-router-dom';

class Breadcrumbs extends PureComponent {
    render() {
      const { productDetail } = this.props;
      return (
        <div className="row">
          <div className="col">
            <div className="breadcrumbs d-flex flex-row align-items-center">
              <ul>
                <li><Link exact to="/">Home</Link></li>
                <li><Link exact to="/shop"><i className="fa fa-angle-right" aria-hidden="true" /> Shop </Link></li>
                <li className="active"><a href="#"><i className="fa fa-angle-right" aria-hidden="true" />{ productDetail.name }</a></li>
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