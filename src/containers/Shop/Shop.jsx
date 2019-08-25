import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
        this.state = {
          filter: {
            categoryId: '',
            priceRange: { 
              min: minPrice?Number(minPrice):0, 
              max: maxPrice?Number(maxPrice):1000
            },
          },
          listProduct: [],
          listCategory: [],
        };
    }

    getListProduct = async (filter) => {
      const { priceRange, categoryId } = filter;
      try {
            // get list product by price
            let filter = {
              limit: 12,
              skip: 0,
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
            // console.log('duong',response);
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
        return `/shop?fromPrice=${filter.priceRange.min}&toPrice=${filter.priceRange.max}` 
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
        // console.log('duonggggggggggggggg');

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
                  <Sidebar onClickCate={this.handleGetProductByCate} listCategory={listCategory} categoryId={categoryId} onChangePrice = {this.handleChangePrice} filter={filter} />
                  {/* MainContent */}
                  <MainContent listProduct={listProduct} />
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

export default Shop;