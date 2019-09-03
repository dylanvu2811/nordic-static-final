import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

class ItemProduct extends PureComponent {
    render() {
        // console.log(this.props.item);
        const { item, onClickAddToCart} = this.props;
        let productPrice;
        let discount;

        if(!(item.originalPrice === item.salePrice)) {
            productPrice = <div className="product_price">${item.salePrice}<span>${item.originalPrice}</span></div>;
            discount = <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-${item.originalPrice - item.salePrice}</span></div>;
        }else {
            productPrice = <div className="product_price">${item.salePrice}<span></span></div>;
        }

        return (
            <div className="product-item">
                <div className="product product_filter">
                    <div className="product_image">
                        <img src={item.thumbnail} />
                    </div>
                    <div className="favorite favorite_left" />
                    {discount}
                    <div className="product_info">
                        <h6 className="product_name"><NavLink exact to={ `/product/${item.id}`}>{item.name}</NavLink></h6>
                        {/* <div className="product_price">${item.salePrice}<span>${item.originalPrice}</span></div> */}
                        {productPrice}
                    </div>
                </div>
                <div className="red_button add_to_cart_button"><Link onClick={() => onClickAddToCart(item)} >add to cart</Link></div>
            </div>
        );
    }
}

ItemProduct.propTypes = {

};

export default ItemProduct;