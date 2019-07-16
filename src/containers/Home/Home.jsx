import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Home/Header/Header';
import HeroBanner from '../../components/Home/HeroBanner/HeroBanner';

class Home extends PureComponent {
    render() {
        return (
            <div>
                <Header />
                <HeroBanner />
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;