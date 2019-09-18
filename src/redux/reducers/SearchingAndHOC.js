import{
    SEARCHING
}from '../constants/action-types'
const initialState = {
    search :'',
}
const SearchingAndHOCReducer = (state=initialState,action)=>{
    switch(action.type){
        case SEARCHING : 
        return {
            search : action.payload
        };
        default : 
        return state;
    }
}
export default SearchingAndHOCReducer;