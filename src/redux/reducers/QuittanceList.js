import{
    POST_QUITTANCE_LIST
}from '../constants/action-types'
const initialState = {
    quittance :['mohamed'],
}
const QuittanceListReducer = (state=initialState,action)=>{
    switch(action.type){
        case POST_QUITTANCE_LIST : 
        return {
            quittance : state
        };
        default : 
        return state;
    }
}
export default QuittanceListReducer;