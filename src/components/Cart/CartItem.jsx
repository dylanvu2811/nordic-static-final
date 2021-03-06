import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import * as configs from './../../actions/Config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeToCart, changeNotify } from './../../actions/index';

class CartItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        // value: 0,
      };
    }

    handleDelete = (product) => {
      // console.log(product);
      this.props.removeToCart(product);
      this.props.changeNotify(configs.NOTIFY_ACT_DELETE);
    }

    render() {
        let {cartItem} = this.props;
        let { product } = cartItem;
        let quantity = cartItem.quantity;
        return (
            <div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-2 text-center">
                        <img className="img-responsive" src={ product.thumbnail } alt="prewiew" width={120} height={80} />
                    </div>
                    <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                        <h4 className="product-name"><strong>{ product.name }</strong></h4>
                        <h4>
                            <small>{ product.shortDescription }</small>
                        </h4>
                    </div>
                    <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                    <div className="col-3 col-sm-3 col-md-6 text-md-right" style={{paddingTop: '5px'}}>
                        <h6><strong> ${product.salePrice}</strong></h6>
                        <h6><strong> Subtotal: ${this.showSubTotalPrice(product.salePrice, quantity)}</strong></h6>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4">
                        <div className="quantity">
                            <input name="value" max={99} min={1} value={quantity} className="qty" />
                        </div>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 text-right">
                        <button onClick = {() => this.handleDelete(product)} type="button" className="btn btn-outline-danger btn-xs">
                          <i className="fa fa-trash" aria-hidden="true" />
                        </button>
                    </div>
                    </div>
                </div>
                <hr />
            </div>
        );
    }

    showSubTotalPrice (salePrice, quantity) {
      let subTotal = null;
      subTotal = salePrice * quantity;
      return subTotal;
    }
}

CartItem.propTypes = {

};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    removeToCart,
    changeNotify
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(CartItem);