import {createStore, combineReducers,applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import MainMenuReducer from '../reducers/MainMenuReducer'
import PatientsListReducer from '../reducers/PatientsList'
import MedecinesListReducer from '../reducers/MedecinesList'
import DoctorsListReducer from '../reducers/DoctorsList'
import SearchingAndHOCReducer from '../reducers/SearchingAndHOC'
import isLoadingReducer from '../reducers/isLoadingReducer';
import QuittanceListReducer from '../reducers/QuittanceList'
import logger from 'redux-logger'
let initialState = {};
const middleware = [thunkMiddleware];
    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(...middleware),
        // other store enhancers if any
    );

const myStore = createStore(
    combineReducers({
        MainMenuTitles : MainMenuReducer,
        PatientsListReducer,
        MedecinesListReducer,
        DoctorsListReducer,
        SearchingAndHOCReducer,
        isLoadingReducer,
        QuittanceListReducer
    }),
    initialState,
    enhancer
)
export default myStore