import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class ItemProduct extends PureComponent {

    // handleAddToCart = (item) => {
    //     console.log(item);
    // }
    render() {
        const {item , onClickAddToCart} = this.props;
        return (
          <div className="product-item">
            <div className="product discount product_filter">
              <div className="product_image">
                <img src={item.thumbnail} />
              </div>
              <div className="favorite favorite_left" />
              <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
              <div className="product_info">
                <h6 className="product_name"><NavLink exact to={ `/product/${item.id}`}>{item.name}</NavLink></h6>
                <div className="product_price">${item.salePrice}<span>${item.originalPrice}</span></div>
              </div>
            </div>
            <div className="red_button add_to_cart_button"><a href="#" onClick={() => onClickAddToCart(item)} >add to cart</a></div>
          </div>
        );
    }
}

ItemProduct.propTypes = {

};

export default ItemProduct;