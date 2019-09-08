import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Sidebar.scss'; 
import InputRange from 'react-input-range';
import { Link } from 'react-router-dom';

class Sidebar extends PureComponent {

    constructor (props) {
        super(props);
        this.state = {
          priceValue: this.props.filter.priceRange,
          categoryId: '',
        };
        this.handleGetProductByCate = this.handleGetProductByCate.bind(this);
    }

    handleGetProductByCate(id) {
        this.props.onClickCate(id);
        this.setState({ categoryId: id });
    }
    handleChangePrice = (newValue) =>{
      this.setState({priceValue: newValue});
    }
    render() {

        const { listCategory ,onChangePrice } = this.props;
        return (
          <div className="sidebar">
            <div className="sidebar_section">
              <div className="sidebar_title">
                <h5>Product Category</h5>
              </div>
              <ul className="sidebar_categories">
                <li className={`${this.state.categoryId === ''?'active':''}`}><Link onClick={() => this.handleGetProductByCate('')}> <span><i className={`${this.state.categoryId === ''?'fa fa-angle-double-right':''}`} /></span> All</Link></li>
                {listCategory && listCategory.map( category =>
                    <li className={`${this.state.categoryId === category.id?'active':''}`}><Link key={ category.id } onClick={() => this.handleGetProductByCate(category.id)}><span><i className={`${this.state.categoryId === category.id?'fa fa-angle-double-right':''}`} /></span>{ category.name } </Link></li>
                )}
              </ul>
            </div>
            {/* Price Range Filtering */}
            <div className="sidebar_section">
              <div className="sidebar_title">
                <h5>Filter by Price</h5>
              </div>
              <div>
                <InputRange maxValue={1000} minValue={0} value={this.state.priceValue} onChange={value => this.handleChangePrice(value)} />
              </div>
              <div className="filter_button" onClick={() => onChangePrice(this.state.priceValue)}><span>filter</span></div>
            </div>
          </div>
        );
    }
}

Sidebar.propTypes = {

};

export default Sidebar;