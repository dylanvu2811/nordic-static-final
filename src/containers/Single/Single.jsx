import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '../../components/Single/Breadcrumbs/Breadcrumbs';
import SingleProductPics from '../../components/Single/SingleProductPics/SingleProductPics';
import TabsSection from '../../components/Single/TabsSection/TabsSection';
import ShippingInformation from '../../components/Common/ShippingInformation/ShippingInformation';
import productApi from '../../api/productApi';
class Single extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
        productDetail: {},
        loading: true,
    };
}

async componentDidMount(){
    const response = await productApi.getDetail(this.props.match.params.id);
    const productDetail = response.body;

    this.setState({ productDetail, loading: false });
}
    render() {
        const { loading, productDetail } = this.state;
        if (loading) return <p>Loading product...</p>;
        return (
          <div>
            <div className="container single_product_container">
              {/* Breadcrumbs */}
              <Breadcrumbs productDetail = { productDetail } />
              {/* Single Product Pics */}
              <SingleProductPics productDetail = { productDetail } />
            </div>
            {/* Tabs Section */}
            <TabsSection />
            <ShippingInformation />
          </div>
        );
    }
}

Single.propTypes = {

};

export default Single;