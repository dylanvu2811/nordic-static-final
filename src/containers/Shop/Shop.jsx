import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '../../components/Shop/Breadcrumbs/Breadcrumbs';
import Sidebar from '../../components/Shop/Sidebar/Sidebar';
import MainContent from '../../components/Shop/MainContent/MainContent';

class Shop extends PureComponent {
    render() {
        return (
          <div className="container product_section_container">
            <div className="row">
              <div className="col product_section clearfix">
                {/* Breadcrumbs */}
                <Breadcrumbs />
                {/* Sidebar */}
                <Sidebar />
                {/* MainContent */}
                <MainContent />

              </div>
            </div>
          </div>
        
        );
    }
}

Shop.propTypes = {

};

export default Shop;