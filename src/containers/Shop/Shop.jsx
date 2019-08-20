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
        this.state = {
          listProduct: [],
          listCategory: [],
          categoryId:'',
        };
    }

    getListProduct = async () => {
          try {
            let filter = {
              limit: 12,
              skip: 0,
            };
      
            const params = {
              filter: JSON.stringify(filter),
            }

            // get list product
            const response = await productApi.getAll(params);
            const { body: listProduct } = response;

            // new state
            this.setState({ listProduct});
      
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
            this.getListProduct();
            this.getListCategory();
        } catch {
          console.log('err');
        }
    }

    handleGetProductByCate = async (id) => {
        console.log(id);
        try {
          let filter = {
            limit: 10,
            skip: 0,
          };
          if(id !== ''){
            filter = {
              ...filter,
              where: {
                categoryId: id,
              }
          }};
          // Get product list
          const params = {
            filter: JSON.stringify(filter),
          }
        
          const response = await productApi.getAll(params);
          const { body: listProduct } = response;
          this.setState({ listProduct, categoryId: id });
        } catch (error) {
          console.log('Failed to load product list: ', error.message);
        }
    }
    render() {
        const { listProduct, listCategory, categoryId } = this.state;
        return (
          <div>
            <div className="container product_section_container">
              <div className="row">
                <div className="col product_section clearfix">
                  {/* Breadcrumbs */}
                  <Breadcrumbs />
                  {/* Sidebar */}
                  <Sidebar onClickCate={this.handleGetProductByCate} listCategory={listCategory} categoryId={categoryId} />
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