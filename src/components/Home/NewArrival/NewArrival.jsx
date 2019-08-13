import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './NewArrival.scss'; 
import ListProduct from './ListProduct/ListProduct';
import productApi from '../../../api/productApi';

class NewArrival extends PureComponent {

    constructor (props) {
        super(props);
        this.state = {
          listProduct: [],
        };
    }

    async componentDidMount() {
      try {
        const filter = {
          limit: 10,
        };
  
        const params = {
          filter: JSON.stringify(filter),
        }
        const response = await productApi.getAll(params);
        const { body: listProduct } = response;
        this.setState({ listProduct });
      } catch (error) {
        console.log('Failed to load list: ', error.message);
      }
    }

    render() {
        return (
            <div className="new_arrivals">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="section_title new_arrivals_title">
                                <h2>New Arrivals</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col text-center">
                            <div className="new_arrivals_sorting">
                                <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked" data-filter="*">all</li>
                                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".women">women's</li>
                                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".accessories">accessories</li>
                                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".men">men's</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ListProduct listProduct={this.state.listProduct} />
                </div>
            </div>

        );
    }
}

NewArrival.propTypes = {

};

export default NewArrival;