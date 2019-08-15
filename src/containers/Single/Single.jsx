import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '../../components/Single/Breadcrumbs/Breadcrumbs';
import SingleProductPics from '../../components/Single/SingleProductPics/SingleProductPics';
import TabsSection from '../../components/Single/TabsSection/TabsSection';
import ShippingInformation from '../../components/Common/ShippingInformation/ShippingInformation';

class Single extends PureComponent {
    render() {
        return (
          <div>
            <div className="container single_product_container">
              {/* Breadcrumbs */}
              <Breadcrumbs />
              {/* Single Product Pics */}
              <SingleProductPics />
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