import{
    GET_DOCTORS_LIST,
    ADD_DOCTOR_TO_RECEPTION
}from '../constants/action-types'
const initialState = {
    doctors : [],
    addedDoctor : []
}
const DoctorsListReducer = (state=initialState,action)=>{
    switch(action.type){
        case GET_DOCTORS_LIST : 
        return {
            ...state,
            doctors : action.payload
        };
        case ADD_DOCTOR_TO_RECEPTION :
            return {
                ...state,
                addedDoctor : action.payload,
                clicked : action.clicked
            }; 
        default : 
        return state;
    }
}
export default DoctorsListReducer;