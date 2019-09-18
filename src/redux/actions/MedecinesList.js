import Axios from "axios";
import{
    GET_MEDECINES_LIST,
    ADD_MEDECINES_TO_BILLING,
    PRICE_PER_CATEGORY,
    SOCIETY_INFORMATIONS,
    DELETE_MEDECINES_FROM_BILLING,
    START_LOADING,
    STOP_LOADING
}from '../constants/action-types'
import {medicinesList
} from '../../config/config'
export const getMedecinesList = () =>{
    return dispatch =>{
        dispatch({type: START_LOADING})
        Axios.get(medicinesList)
        .then(res =>{
            dispatch({type: STOP_LOADING})
            dispatch({
                type : GET_MEDECINES_LIST,
                payload : res.data
            })
            
        })
        
    }
};
export const addMedecinesToBilling = (selectedMedecine) =>{
    return dispatch =>{
        dispatch({
            type : ADD_MEDECINES_TO_BILLING,
            payload : selectedMedecine,
            clicked : true
        })
       
    }
};
export const deleteMedecinesFromBilling = (deletedMedecine) =>{
    return dispatch =>{
        dispatch({
            type : DELETE_MEDECINES_FROM_BILLING,
            payload : deletedMedecine,
            clicked : true
        })
       
    }
};
export const pricePerCategory = (selectedMedecine,selectedPatient) =>{
    return dispatch =>{
        console.log(selectedPatient)
        console.log(selectedMedecine)
        Axios.get('http://197.14.53.85:8091/parametrage-core/api/priceliste-par-categorie-article/findByCodeAdmissionAndCodeArticle?codeArticle='+selectedMedecine.articleID+'&codeAdmission='+selectedPatient+'&pharmacieExterne=true')
        .then(res =>{
            dispatch({
                type : PRICE_PER_CATEGORY,
                payload : res.data
            })
        })
       
    }
};

export const societyInformations = (selectedPatient) =>{
    return dispatch =>{
        console.log(selectedPatient)
        Axios.get('http://197.14.53.85:8091/reception-core/api/admissions/societe/'+selectedPatient)
        .then(res =>{
            dispatch({
                type : SOCIETY_INFORMATIONS,
                payload : res.data,
                choosenSociety : true
            })
        })

    }
};
