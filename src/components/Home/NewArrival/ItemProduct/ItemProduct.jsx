import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class ItemProduct extends PureComponent {
    render() {
        // console.log(this.props.item);
        const {item} = this.props;
        return (
            <div className="product-item">
                <div className="product discount product_filter">
                    <div className="product_image">
                        <img src="{item.thumbnail}" alt />
                    </div>
                    <div className="favorite favorite_left" />
                    <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                    <div className="product_info">
                        <h6 className="product_name"><NavLink exact to="/single">{item.name}</NavLink></h6>
                        <div className="product_price">$520.00<span>$590.00</span></div>
                    </div>
                </div>
                <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
            </div>
        );
    }
}

ItemProduct.propTypes = {

};

export default ItemProduct;