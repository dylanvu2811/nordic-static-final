import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ListCategory extends PureComponent {

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
        const { listcategory , categoryId } = this.props;
        const itemCateClass = "grid_sorting_button button d-flex flex-column justify-content-center align-items-center";
        return (
            <div className="new_arrivals_sorting">
                <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                    <li onClick={() => this.handleGetProductByCate('')} className={`${itemCateClass} ${categoryId === ''?'active is-checked':''}`}>all</li>
                    {listcategory && listcategory.map( category =>
                        <li key={ category.id } onClick={() => this.handleGetProductByCate(category.id)} className={`${itemCateClass} ${categoryId === category.id?'active is-checked':''}`} >{ category.name }</li>
                    )}
                </ul>
            </div>
        );
    }
}

ListCategory.propTypes = {

};

export default ListCategory;