import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ItemProduct from '../ItemProduct/ItemProduct';
import Loader from '../../../Loader/Loader';

class ListProduct extends PureComponent {

    constructor (props) {
        super(props);
        this.state = {
        };
    }
    render() {
        // console.log(this.props.listProduct);
        const { onClickAddToCart, productLoading } = this.props;
        const listProduct = this.props.listProduct;
        const itemProduct = listProduct.map((listProduct) => {
            return (
                <ItemProduct key={listProduct.id} item={listProduct} onClickAddToCart = {onClickAddToCart} />
            );
        });
        return (
            <div className="row">
                <div className="col">
                    <div className="product-grid">
                        {/* Product */}
                        {/* {itemProduct} */}
                        { productLoading && <Loader /> }
                        { !productLoading && itemProduct }
                        
                    </div>
                </div>
            </div>
        );
    }
}

ListProduct.propTypes = {

};

export default ListProduct;