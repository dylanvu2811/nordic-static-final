import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './MainContent.scss'; 
import ItemProduct from '../ItemProduct/ItemProduct';
class MainContent extends PureComponent {
    constructor (props) {
        super(props);
        this.state = {

        };
    }
    render() {
        // console.log(this.props.listProduct);
        const listProduct = this.props.listProduct;
        const itemProduct = listProduct.map((listProduct) => {
            return (
                <ItemProduct key={listProduct.id} item={listProduct} />
            );
        });
        return (
          <div className="main_content">
            {/* Products */}
            <div className="products_iso">
              <div className="row">
                <div className="col">
                  {/* Product Sorting */}
                  <div className="product_sorting_container product_sorting_container_top">
                    <ul className="product_sorting">
                      <li>
                        <span className="type_sorting_text">Default Sorting</span>
                        <i className="fa fa-angle-down" />
                        <ul className="sorting_type">
                          <li className="type_sorting_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;original-order&quot; }"><span>Default Sorting</span></li>
                          <li className="type_sorting_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;price&quot; }"><span>Price</span></li>
                          <li className="type_sorting_btn" data-isotope-option="{ &quot;sortBy&quot;: &quot;name&quot; }"><span>Product Name</span></li>
                        </ul>
                      </li>
                      <li>
                        <span>Show</span>
                        <span className="num_sorting_text">6</span>
                        <i className="fa fa-angle-down" />
                        <ul className="sorting_num">
                          <li className="num_sorting_btn"><span>6</span></li>
                          <li className="num_sorting_btn"><span>12</span></li>
                          <li className="num_sorting_btn"><span>24</span></li>
                        </ul>
                      </li>
                    </ul>
                    <div className="pages d-flex flex-row align-items-center">
                      <div className="page_current">
                        <span>1</span>
                        <ul className="page_selection">
                          <li><a href="#">1</a></li>
                          <li><a href="#">2</a></li>
                          <li><a href="#">3</a></li>
                        </ul>
                      </div>
                      <div className="page_total"><span>of</span> 3</div>
                      <div id="next_page" className="page_next"><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></div>
                    </div>
                  </div>
                  {/* Product Grid */}
                  <div className="product-grid">
                    {/* Product */}
                    {itemProduct}
                   
                  </div>
                  {/* Product Sorting */}
                  <div className="product_sorting_container product_sorting_container_bottom clearfix">
                    <ul className="product_sorting">
                      <li>
                        <span>Show:</span>
                        <span className="num_sorting_text">04</span>
                        <i className="fa fa-angle-down" />
                        <ul className="sorting_num">
                          <li className="num_sorting_btn"><span>01</span></li>
                          <li className="num_sorting_btn"><span>02</span></li>
                          <li className="num_sorting_btn"><span>03</span></li>
                          <li className="num_sorting_btn"><span>04</span></li>
                        </ul>
                      </li>
                    </ul>
                    <span className="showing_results">Showing 1–3 of 12 results</span>
                    <div className="pages d-flex flex-row align-items-center">
                      <div className="page_current">
                        <span>1</span>
                        <ul className="page_selection">
                          <li><a href="#">1</a></li>
                          <li><a href="#">2</a></li>
                          <li><a href="#">3</a></li>
                        </ul>
                      </div>
                      <div className="page_total"><span>of</span> 3</div>
                      <div id="next_page_1" className="page_next"><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        );
    }
}

MainContent.propTypes = {

};

export default MainContent;