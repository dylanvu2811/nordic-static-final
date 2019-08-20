import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Sidebar.scss'; 
class Sidebar extends PureComponent {

    constructor (props) {
        super(props);
        this.state = {

        };
        this.handleGetProductByCate = this.handleGetProductByCate.bind(this);
    }

    handleGetProductByCate(id) {
        this.props.onClickCate(id);
    }
    render() {
        const { listCategory ,categoryId  } = this.props;

        return (
          <div className="sidebar">
            <div className="sidebar_section">
              <div className="sidebar_title">
                <h5>Product Category</h5>
              </div>
              <ul className="sidebar_categories">
                {listCategory && listCategory.map( category =>
                    <li className={`${categoryId === category.id?'active':''}`}><a href="javascript:void(0)" key={ category.id } onClick={() => this.handleGetProductByCate(category.id)}><span><i className={`${categoryId === category.id?'fa fa-angle-double-right':''}`} /></span>{ category.name }</a></li>
                )}
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