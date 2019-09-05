import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import CartItem from '../../components/Cart/CartItem';
import { sumBy } from 'lodash';
import './Cart.scss'; 
import Notify from '../../components/Notify/Notify';
import {NavLink} from 'react-router-dom';

class Cart extends PureComponent {
    render() {
        let {items} = this.props;
        
        return (
            <div className="container cart_container">
              <div className="row">
                <div className="col">
                  <div className="breadcrumbs d-flex flex-row align-items-center">
                    <ul>
                      <li><a href="index.html">Home</a></li>
                      <li className="active"><a href="#"><i className="fa fa-angle-right" aria-hidden="true" />Shopping Cart</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="container">
                    
                    {this.showNotify(items)}
                    <div className="card shopping-cart">
                      <div className="card-body">
                            {/* PRODUCT */}
                            {this.showProduct(items)}
                            {/* END PRODUCT */}
                          <div className="pull-right">
                            {this.showTotalPrice(items)}
                          </div>
                      </div>
                    </div>
                </div>    
              </div>        
            </div>
        );
    }

    showProduct(items) {
      // console.log('duong', items);
      let html =  <div className="empty-cart">
                    <span className="empty-cart-image" />
                    <p className="message">You have no items in your shopping cart.</p>
                    <div className="red_button add_to_cart_button">
                      <NavLink to="/shop">Continue shopping</NavLink>
                    </div>
                  </div>;
      if (items.length > 0) {
        html =  items.map((cartItem, index) => {
          return (
            <CartItem key={index} cartItem = {cartItem} index = {index} /> 
          );
        }); 
      }
      return <div className="body">{html}</div>;
    }
    showTotalPrice(items) {
      // console.log('duong', items);
      let html = '';
      if (items.length > 0) {
        let totalPrice = sumBy(items, (item) => {
          return item.product.salePrice * item.quantity;;
        });
        // console.log(totalPrice);
        html = <span>Total price: <b>${totalPrice}</b></span>
      }
      return <div>{html}</div>;
    }
    showNotify(items) {
      if (items.length > 0) return <Notify />;
    }
    
}

const mapStateToProps = state => {
  return {
    items: state.carts
  }
}
export default connect(mapStateToProps, null)(Cart);