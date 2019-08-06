import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Sidebar.scss'; 
class Sidebar extends PureComponent {
    render() {
        return (
          <div className="sidebar">
            <div className="sidebar_section">
              <div className="sidebar_title">
                <h5>Product Category</h5>
              </div>
              <ul className="sidebar_categories">
                <li><a href="#">Men</a></li>
                <li className="active"><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true" /></span>Women</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Collection</a></li>
                <li><a href="categories.html">shop</a></li>
              </ul>
            </div>
            {/* Price Range Filtering */}
            <div className="sidebar_section">
              <div className="sidebar_title">
                <h5>Filter by Price</h5>
              </div>
              <p>
                <input type="text" id="amount" readOnly style={{border: 0, color: '#f6931f', fontWeight: 'bold'}} />
              </p>
              <div id="slider-range" />
              <div className="filter_button"><span>filter</span></div>
            </div>
          </div>
        );
    }
}

Sidebar.propTypes = {

};

export default Sidebar;