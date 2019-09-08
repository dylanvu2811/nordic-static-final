import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './MainContent.scss'; 
import ItemProduct from '../ItemProduct/ItemProduct';
import Loader from '../../Loader/Loader';
class MainContent extends PureComponent {
    constructor (props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const { listProduct, onClickChangePage, filter , onClickChangeSkip, onClickChangeOrder , onClickAddToCart, productLoading} = this.props;
        const itemProduct = listProduct.map((listProduct) => {
            return (
                <ItemProduct key={listProduct.id} item={listProduct} onClickAddToCart = {onClickAddToCart} />
            );
        });

        const totalProduct = 32;
        const pageCount = Math.ceil(totalProduct/filter.limit);
        let currentPage = [];
        for (let x = 1; x <= pageCount; x++) {
          let skip = (filter.limit * x) - filter.limit
          currentPage.push(<li key={x} onClick={() => onClickChangeSkip(skip)} ><a>{x}</a></li>);
        }
        // console.log('duong',pageCount);
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
                        <span className={`type_sorting_text ${filter.order === ''?'sortactive':'hidden'}`}>Default Sorting</span>
                        <span className={`type_sorting_text ${filter.order === 'salePrice'?'sortactive':'hidden'}`}>Price</span>
                        <span className={`type_sorting_text ${filter.order === 'name'?'sortactive':'hidden'}`}>Product Name</span>
                        <i className="fa fa-angle-down" />
                        <ul className="sorting_type">
                          <li className="type_sorting_btn" onClick={() => onClickChangeOrder('')}><span>Default Sorting</span></li>
                          <li className="type_sorting_btn" onClick={() => onClickChangeOrder('salePrice')}><span>Price</span></li>
                          <li className="type_sorting_btn" onClick={() => onClickChangeOrder('name')}><span>Product Name</span></li>
                        </ul>

                      </li>
                      <li>
                        <span>Show</span>
                        <span className="num_sorting_text">{filter.limit}</span>
                        <i className="fa fa-angle-down" />
                        <ul className="sorting_num">
                          <li className="num_sorting_btn" onClick={() => onClickChangePage(6)}>
                            <span>6</span>
                          </li>
                          <li className="num_sorting_btn" onClick={() => onClickChangePage(12)}>
                            <span>12</span>
                          </li>
                          <li className="num_sorting_btn" onClick={() => onClickChangePage(24)}>
                            <span>24</span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div className="pages d-flex flex-row align-items-center">
                      <div className="page_current">
                        <span>{filter.page}</span>
                        <ul className="page_selection">
                          {currentPage}
                        </ul>
                      </div>
                      <div className="page_total"><span>of</span> {pageCount}</div>
                      <div id="next_page" className="page_next"><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></div>
                    </div>
                  </div>
                  {/* Product Grid */}
                  <div className="product-grid">
                    {/* Product */}
                    { productLoading && <Loader /> }
                    { !productLoading && itemProduct }
                   
                  </div>
                  {/* Product Sorting */}
                  <div className="product_sorting_container product_sorting_container_bottom clearfix">
                    <ul className="product_sorting">
                      <li>
                        <span>Show:</span>
                        <span className="num_sorting_text">{filter.limit}</span>
                        <i className="fa fa-angle-down" />
                        <ul className="sorting_num">
                          <li className="num_sorting_btn" onClick={() => onClickChangePage(6)}>
                            <span>6</span>
                          </li>
                          <li className="num_sorting_btn" onClick={() => onClickChangePage(12)}>
                            <span>12</span>
                          </li>
                          <li className="num_sorting_btn" onClick={() => onClickChangePage(24)}>
                            <span>24</span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div className="pages d-flex flex-row align-items-center">
                      <div className="page_current">
                        <span>{filter.page}</span>
                        <ul className="page_selection">
                          {currentPage}
                        </ul>
                      </div>
                      <div className="page_total"><span>of</span> {pageCount}</div>
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