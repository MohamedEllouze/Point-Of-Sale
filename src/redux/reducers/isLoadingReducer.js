import {START_LOADING, STOP_LOADING} from '../constants/action-types';

const isLoadingReducer = (state = false, action) => {
    switch (action.type) {
        case START_LOADING: return false;
        case STOP_LOADING: return true;
        default: return state;
    }
}

export default isLoadingReducer;