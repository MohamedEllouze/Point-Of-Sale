import{ 
    SEARCHING,
    HOC
}from '../constants/action-types'
export const searching = (event) =>{
    return dispatch =>{
        dispatch({
            type : SEARCHING,
            payload : event,
            clicked : true
        })
       
    }
};
export const basicHOC = (event) =>{
    return dispatch =>{
        dispatch({
            type : HOC,
            payload : event,
            clicked : true
        })
       
    }
};