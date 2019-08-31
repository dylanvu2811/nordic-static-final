import * as types from './../actions/ActionType';
import * as configs from './../actions/Config';

let defaultState = configs.NOTIFY_READY;

const notify = (state = defaultState, action) => {
    switch(action.type) {
        case types.CHANGE_NOTIFY:
            return action.content;
        default:
            return state;
    }
}

export default notify;