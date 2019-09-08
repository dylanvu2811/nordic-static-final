import React, { PureComponent } from 'react';
import * as configs from '../../../actions/Config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart, changeNotify } from '../../../actions/index';
import PropTypes from 'prop-types';
import './NewArrival.scss'; 
import ListProduct from './ListProduct/ListProduct';
import productApi from '../../../api/productApi';
import categoryApi from '../../../api/categoryApi';
import ListCategory from './ListCategory/ListCategory';

class NewArrival extends PureComponent {

    constructor (props) {
        super(props);
        this.state = {
          listProduct: [],
          listcategory: [],
          categoryId:'',
          productLoading: true,
        };
    }

    async componentDidMount() {
      try {
        const filter = {
          limit: 10,
          skip: 0,
        };
  
        const params = {
          filter: JSON.stringify(filter),
        }
        const response = await productApi.getAll(params);
        const category = await categoryApi.getAllCate();
        const { body: listProduct } = response;
        const { body: listcategory } = category;

        this.setState({ listProduct, listcategory, productLoading: false });
      } catch (error) {
        console.log('Failed to load list: ', error.message);
      }
    }

    handleGetProductByCate = async (id) => {
        // console.log(id);
        try {
          this.setState({ productLoading: true });
          let filter = {
            limit: 10,
            skip: 0,
          };
          if(id !== ''){
            filter = {
              ...filter,
              where: {
                categoryId: id,
              },
              
          }};
          // Get product list
          const params = {
            filter: JSON.stringify(filter),
          }
        
          const response = await productApi.getAll(params);
          const { body: listProduct } = response;
          this.setState({ listProduct, categoryId: id, productLoading: false });
        } catch (error) {
          console.log('Failed to load product list: ', error.message);
        }
    }

    // add product to cart
    handleAddToCart = (item) => {
      this.props.addToCart(item ,1);
      this.props.changeNotify(configs.NOTIFY_ACT_ADD);
    }

    render() {
        const { listProduct, listcategory, categoryId, productLoading} = this.state;
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
                            <ListCategory productLoading = { productLoading } onClickCate={this.handleGetProductByCate} listcategory={listcategory} categoryId={categoryId} />
                        </div>
                    </div>
                    <ListProduct onClickAddToCart = {this.handleAddToCart} listProduct={listProduct} productLoading = { productLoading } />
                </div>
            </div>

        );
    }
}

NewArrival.propTypes = {

};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addToCart,
    changeNotify
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(NewArrival);