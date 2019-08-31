import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import CartItem from '../../components/Cart/CartItem';
import Notify from '../../components/Notify/Notify';
import { sumBy } from 'lodash';

class Cart extends PureComponent {
    render() {
        let {items} = this.props;
        
        return (
            <div className="container contact_container">
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
              <div className="container">
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
              
                <Notify />
            </div>
        );
    }

    showProduct(items) {
      // console.log('duong', items);
      let html = null;
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
      let html = <span>Total price: <b>$0</b></span>;
      if (items.length > 0) {
        let totalPrice = sumBy(items, (item) => {
          return item.product.salePrice * item.quantity;;
        });
        console.log(totalPrice);
        html = <span>Total price: <b>${totalPrice}</b></span>
      }
      return <div>{html}</div>;
    }
    
}

const mapStateToProps = state => {
  return {
    items: state.carts
  }
}
export default connect(mapStateToProps, null)(Cart);