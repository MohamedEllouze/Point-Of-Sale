import Axios from "axios";
import{ GET_IN_PATIENT_LIST, 
        GET_OPD_PATIENT_LIST,
        GET_CASH_PATIENT_LIST,
        ADD_PATIENT_TO_RECEPTION,
        START_LOADING,
        STOP_LOADING
}from '../constants/action-types'
import {inPatientList, 
        OPDList,
        cashPatientList
} from '../../config/config'

export const getInPatientList = () =>{
    return dispatch =>{
        dispatch({type: START_LOADING})
        Axios.get(inPatientList)
        .then(res =>{
            dispatch({type: STOP_LOADING})
            dispatch({
                type : GET_IN_PATIENT_LIST,
                payload : res.data,
                patientType : 'داخلي',
                clicked : true
            })
        })
    }
};
export const getOPDPatientList = () =>{
    return dispatch =>{
        dispatch({type: START_LOADING})
        Axios.get(OPDList).then(res =>{
            dispatch({type: STOP_LOADING})
            dispatch({
                type : GET_OPD_PATIENT_LIST,
                payload : res.data,
                patientType : 'العيادات الخارجية'
            })
        })
        
    }
};

export const getCashPatientList = () =>{
    return dispatch =>{
        Axios.get(cashPatientList).then(res =>{
            dispatch({
                type : GET_CASH_PATIENT_LIST,
                payload : res.data,
                patientType : 'نقدي'
            })
        })
    }
};
export const addPatientToReception = (patientIndex) =>{
    return dispatch =>{
        dispatch({
            type : ADD_PATIENT_TO_RECEPTION,
            payload : patientIndex,
            clicked : true
        })
       
    }
};