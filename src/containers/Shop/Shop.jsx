import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart, changeNotify } from './../../actions/index';

import Breadcrumbs from '../../components/Shop/Breadcrumbs/Breadcrumbs';
import Sidebar from '../../components/Shop/Sidebar/Sidebar';
import MainContent from '../../components/Shop/MainContent/MainContent';
import ShippingInformation from '../../components/Common/ShippingInformation/ShippingInformation';
import productApi from '../../api/productApi';
import categoryApi from '../../api/categoryApi';

class Shop extends PureComponent {
    constructor (props) {
        super(props);
        const urlParams = new URLSearchParams(this.props.location.search);
        // console.log(urlParams);
        const minPrice = urlParams.get("fromPrice");
        const maxPrice = urlParams.get("toPrice");
        const limit = urlParams.get("limit");
        const skip = urlParams.get("skip");
        const page = urlParams.get('page');
        const order = urlParams.get('order');
        const categoryId = urlParams.get('categoryId');
        this.state = {
          filter: {
            categoryId: categoryId?categoryId:'',
            limit:limit?limit:6,
            skip: skip?skip:0,
            page: page?page:1,
            order: order?order:'',
            priceRange: { 
              min: minPrice?Number(minPrice):0, 
              max: maxPrice?Number(maxPrice):1000
            },
          },
          listProduct: [],
          listCategory: [],
          // value:1,
        };
    }

    getListProduct = async (filter) => {
      const { priceRange, categoryId, limit, skip, page, order } = filter;
      try {
            // get list product by price
            let filter = {
              limit: limit,
              skip: skip,
              page: page,
              order: order,
              where: {
                and: [
                  { salePrice: { gte: priceRange.min } },
                  { salePrice: { lte: priceRange.max } },
                ],
              }
            };
        
            // get list product by category
            if(categoryId !== ''){
              filter = {
                ...filter,
                where: {
                  categoryId: categoryId,
                }
            }};
      
            const params = {
              filter: JSON.stringify(filter),
            }

            // get list product
            const response = await productApi.getAll(params);
            const { body: listProduct } = response;

            // new state
            this.setState({ listProduct});
            // console.log('duong',categoryId);
          } catch (error) {
            console.log('Failed to load list: ', error.message);
          }
    }

    getListCategory = async () => {
      try {
        // get list cate
        const category = await categoryApi.getAllCate();
        const { body: listCategory } = category;
        // new state
        this.setState({ listCategory});
  
      } catch (error) {
        console.log('Failed to load list: ', error.message);
      }
    }

    componentDidMount = async () => {
        try {
            this.getListCategory();
            this.getListProduct(this.state.filter);
        } catch {
          console.log('err');
        }
    }
    URL = (filter) => {
        return `/shop?limit=${filter.limit}&skip=${filter.skip}&categoryId=${filter.categoryId}&fromPrice=${filter.priceRange.min}&toPrice=${filter.priceRange.max}&page=${filter.page}&order=${filter.order}` 
    }
    handleGetProductByCate = (id) => {
      // console.log('duong', id);
      const { filter } = this.state;
      const newfilter = {
          ...this.state,
          filter: {
              ...filter,
              categoryId: id,
          }
      }
      this.setState({newfilter})
      this.getListProduct(newfilter.filter);
      this.props.history.replace(this.URL(newfilter.filter));
    }

    handleChangePrice = (newValue) => {
        const { filter } = this.state;
        const newfilter = {
            ...this.state,
            filter: {
                ...filter,
                priceRange: newValue,
            }
        }
        this.setState(newfilter);
        this.getListProduct(newfilter.filter);
        this.props.history.replace(this.URL(newfilter.filter));
    }

    handleChangePage = (limit) => {
      const { filter } = this.state;
      const newfilter = {
          ...this.state,
          filter: {
              ...filter,
              limit: limit,
          }
      }
      this.setState(newfilter);
      this.getListProduct(newfilter.filter);
      this.props.history.replace(this.URL(newfilter.filter));
    }
    handleChangeSkip = (skip) => {
      const { filter } = this.state;
      const newfilter = {
          ...this.state,
          filter: {
              ...filter,
              skip: skip,
              page: (skip / filter.limit) + 1,
          }
      }
      this.setState(newfilter);
      this.getListProduct(newfilter.filter);
      this.props.history.replace(this.URL(newfilter.filter));
    }

    handleChangeOrder = (order) => {
      const { filter } = this.state;
      const newfilter = {
          ...this.state,
          filter: {
              ...filter,
              order: order,
          }
      }
      this.setState(newfilter);
      this.getListProduct(newfilter.filter);
      this.props.history.replace(this.URL(newfilter.filter));
    }

    handleAddToCart = (item) => {
      this.props.changeNotify('duonggggg');
      // let quanlity = this.state.value;
      // this.setState(quanlity);
      // console.log(quanlity + '-----'+ item.id);
      this.props.addToCart(item ,1);

    }

    render() {
        const { filter, listProduct, listCategory, categoryId } = this.state;
        return (
          <div>
            <div className="container product_section_container">
              <div className="row">
                <div className="col product_section clearfix">
                  {/* Breadcrumbs */}
                  <Breadcrumbs />
                  {/* Sidebar */}
                  <Sidebar filter = {filter} onClickCate={this.handleGetProductByCate} listCategory={listCategory} categoryId={categoryId} onChangePrice = {this.handleChangePrice} filter={filter} />
                  {/* MainContent */}
                  <MainContent onClickAddToCart = {this.handleAddToCart} listProduct={listProduct} onClickChangePage = {this.handleChangePage} filter = {filter} onClickChangeSkip = {this.handleChangeSkip} onClickChangeOrder = {this.handleChangeOrder} />
                </div>
              </div>
            </div>
            <ShippingInformation />
          </div>
        );
    }
}

Shop.propTypes = {

};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addToCart,
    changeNotify
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(Shop);