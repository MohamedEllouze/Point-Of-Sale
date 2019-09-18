import Axios from "axios";
import{
    POST_QUITTANCE_LIST
}from '../constants/action-types'
export const postQuittanceList = () =>{
    return dispatch =>{
        Axios.post('http://172.16.10.45/pharmacie-core/api/quittances?pharmacieExterne=True',)
        .then(res =>{
            dispatch({
                type : POST_QUITTANCE_LIST,
                
            })
        })
    }
};

