import * as types from './../actions/ActionType';
import * as configs from './../actions/Config';

let defaultState = [];

const productsReducer = (state = defaultState, action) => {
    switch(action.type) {
        case types.LIST_PRODUCT:
            return state;
        default:
            return state;
    }
}

export default productsReducer;