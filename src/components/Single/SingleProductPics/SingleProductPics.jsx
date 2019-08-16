import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './SingleProductPics.scss';

class SingleProductPics extends PureComponent {

    render() {
      const { productDetail } = this.props;
      return (
        <div className="row">
          <div className="col-lg-7">
            <div className="single_product_pics">
              <div className="row">
                <div className="col-lg-3 thumbnails_col order-lg-1 order-2">
                  <div className="single_product_thumbnails">
                    <ul>
                      <li><img src={`${productDetail.thumbnail}`} alt="" data-image={`${productDetail.image}`} /></li>
                      <li className="active"><img src={`${productDetail.thumbnail}`} alt="" data-image={`${productDetail.image}`} /></li>
                      <li><img src={`${productDetail.thumbnail}`} alt="" data-image={`${productDetail.image}`} /></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-9 image_col order-lg-2 order-1">
                  <div className="single_product_image">
                    <div className="single_product_image_background" style={{backgroundImage: `url(${productDetail.image})`}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="product_details">
              <div className="product_details_title">
                <h2>{productDetail.name}</h2>
                <p>{productDetail.shortDescription}</p>
              </div>
              <div className="free_delivery d-flex flex-row align-items-center justify-content-center">
                <span className="ti-truck" /><span>free delivery</span>
              </div>
              <div className="original_price">${productDetail.originalPrice}</div>
              <div className="product_price">${productDetail.salePrice}</div>
              <ul className="star_rating">
                <li><i className="fa fa-star" aria-hidden="true" /></li>
                <li><i className="fa fa-star" aria-hidden="true" /></li>
                <li><i className="fa fa-star" aria-hidden="true" /></li>
                <li><i className="fa fa-star" aria-hidden="true" /></li>
                <li><i className="fa fa-star-o" aria-hidden="true" /></li>
              </ul>
              <div className="product_color">
                <span>Select Color:</span>
                <ul>
                  <li style={{background: '#e54e5d'}} />
                  <li style={{background: '#252525'}} />
                  <li style={{background: '#60b3f3'}} />
                </ul>
              </div>
              <div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
                <span>Quantity:</span>
                <div className="quantity_selector">
                  <span className="minus"><i className="fa fa-minus" aria-hidden="true" /></span>
                  <span id="quantity_value">1</span>
                  <span className="plus"><i className="fa fa-plus" aria-hidden="true" /></span>
                </div>
                <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                <div className="product_favorite d-flex flex-column align-items-center justify-content-center" />
              </div>
            </div>
          </div>
        </div>
      );
    }
}

SingleProductPics.propTypes = {

};

export default SingleProductPics;