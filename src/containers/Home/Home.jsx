import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import HeroBanner from '../../components/Home/HeroBanner/HeroBanner';
import QuickCatetories from '../../components/Home/QuickCatetories/QuickCatetories';
import NewArrival from '../../components/Home/NewArrival/NewArrival';
import DealOfTheWeek from '../../components/Home/DealOfTheWeek/DealOfTheWeek';
import ShippingInformation from '../../components/Home/ShippingInformation/ShippingInformation';

class Home extends PureComponent {
    render() {
        return (
            <div>
                <HeroBanner />
                <QuickCatetories />
                <NewArrival />
                <DealOfTheWeek />
                <ShippingInformation />
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;