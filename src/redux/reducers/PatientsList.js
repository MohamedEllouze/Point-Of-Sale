import {GET_IN_PATIENT_LIST, 
        GET_OPD_PATIENT_LIST,
        GET_CASH_PATIENT_LIST,
        ADD_PATIENT_TO_RECEPTION 
} from '../constants/action-types'
const intialState={
    patients : [],
    patient : [],
    addedPatient : []
}

const PatientsListReducer = (state=intialState,action)=>{
    switch(action.type){
        case GET_IN_PATIENT_LIST :
           return {
               ...state,
               patients : action.payload,
               patientType : action.patientType,
               clicked : action.clicked
           };
        case GET_OPD_PATIENT_LIST :
            return {
                ...state,
                patients : action.payload,
                patientType :action.patientType
            };
        case GET_CASH_PATIENT_LIST : 
            return {
                ...state,
                patients : action.payload,
                patientType : action.patientType

            };
        case ADD_PATIENT_TO_RECEPTION :
            return {
                ...state,
                patient : action.payload,
                clicked : action.clicked
            };    


        
        default :
        return state;
    }
}

export default PatientsListReducer;