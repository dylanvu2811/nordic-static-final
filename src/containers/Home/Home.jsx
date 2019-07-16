import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Home/Header/Header';
import HeroBanner from '../../components/Home/HeroBanner/HeroBanner';
import QuickCatetories from '../../components/Home/QuickCatetories/QuickCatetories';
import NewArrival from '../../components/Home/NewArrival/NewArrival';
import DealOfTheWeek from '../../components/Home/DealOfTheWeek/DealOfTheWeek';

class Home extends PureComponent {
    render() {
        return (
            <div>
                <Header />
                <HeroBanner />
                <QuickCatetories />
                <NewArrival />
                <DealOfTheWeek />
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;