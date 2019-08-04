import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './QuickCatetories.scss'; 

class QuickCatetories extends PureComponent {
    render() {
        return (
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="banner_item align-items-center" style={{backgroundImage: 'url(images/banner_1.jpg)'}}>
                                <div className="banner_category">
                                    <a href="categories.html">women's</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="banner_item align-items-center" style={{backgroundImage: 'url(images/banner_2.jpg)'}}>
                                <div className="banner_category">
                                    <a href="categories.html">accessories's</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="banner_item align-items-center" style={{backgroundImage: 'url(images/banner_3.jpg)'}}>
                                <div className="banner_category">
                                    <a href="categories.html">men's</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        );
    }
}

QuickCatetories.propTypes = {

};

export default QuickCatetories;