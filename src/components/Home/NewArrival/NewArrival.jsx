import React, { PureComponent } from 'react';
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

        this.setState({ listProduct,listcategory });
      } catch (error) {
        console.log('Failed to load list: ', error.message);
      }
    }

    handleGetProductByCate = async (id) => {
        // console.log(id);
        try {
          let filter = {
            limit: 10,
            skip: 0,
          };
          if(id !== ''){
            filter = {
              ...filter,
              where: {
                categoryId: id,
              }
          }};
          // Get product list
          const params = {
            filter: JSON.stringify(filter),
          }
        
          const response = await productApi.getAll(params);
          const { body: listProduct } = response;
          this.setState({ listProduct, categoryId: id });
        } catch (error) {
          console.log('Failed to load product list: ', error.message);
        }
    }

    render() {
        const { listProduct, listcategory, categoryId} = this.state;
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
                            <ListCategory onClickCate={this.handleGetProductByCate} listcategory={listcategory} categoryId={categoryId} />
                        </div>
                    </div>
                    <ListProduct listProduct={listProduct} />
                </div>
            </div>

        );
    }
}

NewArrival.propTypes = {

};

export default NewArrival;