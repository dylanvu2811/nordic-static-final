import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '../../components/Shop/Breadcrumbs/Breadcrumbs';
import Sidebar from '../../components/Shop/Sidebar/Sidebar';
import MainContent from '../../components/Shop/MainContent/MainContent';
import ShippingInformation from '../../components/Common/ShippingInformation/ShippingInformation';
import productApi from '../../api/productApi';

class Shop extends PureComponent {
    constructor (props) {
        super(props);
        this.state = {
          listProduct: [],
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
    componentDidMount = async () => {
        try {
            this.getListProduct();
        } catch {
          console.log('err');
        }
    }
    render() {
        const { listProduct } = this.state;
        return (
          <div>
            <div className="container product_section_container">
              <div className="row">
                <div className="col product_section clearfix">
                  {/* Breadcrumbs */}
                  <Breadcrumbs />
                  {/* Sidebar */}
                  <Sidebar />
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