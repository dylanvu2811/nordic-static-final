import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ItemProduct from '../ItemProduct/ItemProduct';

class ListProduct extends PureComponent {

    constructor (props) {
        super(props);
        this.state = {
        };
    }
    render() {
        // console.log(this.props.listProduct);
        const { onClickAddToCart } = this.props;
        const listProduct = this.props.listProduct;
        const itemProduct = listProduct.map((listProduct) => {
            return (
                <ItemProduct key={listProduct.id} item={listProduct} onClickAddToCart = {onClickAddToCart} />
            );
        });
        return (
            <div className="row">
                <div className="col">
                    <div className="product-grid" data-isotope="{ &quot;itemSelector&quot;: &quot;.product-item&quot;, &quot;layoutMode&quot;: &quot;fitRows&quot; }">
                        {/* Product */}
                        {itemProduct}
                        
                    </div>
                </div>
            </div>
        );
    }
}

ListProduct.propTypes = {

};

export default ListProduct;