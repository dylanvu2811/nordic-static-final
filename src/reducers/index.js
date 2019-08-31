import { combineReducers } from 'redux';
import productsReducer from './products';
import cartsReducer from './carts';
import notifyReducer from './notify';

const rootReducer = combineReducers({
  products: productsReducer,
  carts: cartsReducer,
  notify: notifyReducer
});

export default rootReducer;
