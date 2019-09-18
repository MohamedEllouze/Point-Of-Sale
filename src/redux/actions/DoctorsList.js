import Axios from "axios";
import {START_LOADING,STOP_LOADING} from '../constants/action-types'
import{ 
    GET_DOCTORS_LIST,
    ADD_DOCTOR_TO_RECEPTION
}from '../constants/action-types'
import {doctorsList
} from '../../config/config'
export const getDoctorsList = () =>{
    return dispatch =>{
        dispatch({type: START_LOADING})
        Axios.get(doctorsList)
        .then(res =>{
            dispatch({type: STOP_LOADING})
            dispatch({
                type : GET_DOCTORS_LIST,
                payload : res.data
            })
        })
        
    }
};
export const addDoctorToReception = (addedDoctor) =>{
    return dispatch =>{
        dispatch({
            type : ADD_DOCTOR_TO_RECEPTION,
            payload : addedDoctor,
            clicked : true
        })
       
    }
};