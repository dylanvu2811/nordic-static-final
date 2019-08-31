import * as types from './../actions/ActionType';
import * as configs from './../actions/Config';

let defaultState = [];
let cartItems = JSON.parse(localStorage.getItem(configs.CARTS_STOGRARE));
defaultState = (cartItems !== null && cartItems.length > 0) ? cartItems : defaultState;

let getPositionProduct = (cartItems, product) => {
    let totalItems = cartItems.length;
    for(let i = 0; i < totalItems; i++) {
        if (cartItems[i].product.id === product.id) return i;
    }
    return -1;
}

const cartsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case types.ADD_PRODUCT:
            let { product, quantity } = action;
            let position = getPositionProduct(state, product);
            if ( position > -1) {
                state[position].quantity += quantity;
            } else {
                state.push({ product, quantity });
            }
            localStorage.setItem(configs.CARTS_STOGRARE, JSON.stringify(state));
            // console.log(action);
            return [...state];
        default:
            return state;
    }
}

export default cartsReducer;