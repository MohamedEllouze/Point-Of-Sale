import{
    GET_MEDECINES_LIST,
    ADD_MEDECINES_TO_BILLING,
    PRICE_PER_CATEGORY,
    SOCIETY_INFORMATIONS,
    DELETE_MEDECINES_FROM_BILLING
}from '../constants/action-types'
const initialState = {
    medecines : [],
    selectedMedecine : [],
    clicked : false,
    selectedMedecines : [],
    repeatedMedecines : [
        {
            code : '',
            number : 0,
            sum : 0,
        }
    ],
    allSelectedMedecines : [],
    pricePerCategory: [],
    deletedMedecine : []
}
const MedecinesListReducer = (state=initialState,action)=>{
    switch(action.type){
        case GET_MEDECINES_LIST : 
        return {
            ...state,
            medecines : action.payload
        };
        case ADD_MEDECINES_TO_BILLING :
            return {
                ...state,
                selectedMedecine : action.payload,
                clicked : action.clicked,
                selectedMedecines : (!(state.selectedMedecines.includes(action.payload)) && state.selectedMedecines.concat(action.payload))|| state.selectedMedecines,
                allSelectedMedecines : state.allSelectedMedecines.concat(action.payload),
            }; 
        case PRICE_PER_CATEGORY :
            return{
                ...state,
                pricePerCategory : action.payload
            }
        case SOCIETY_INFORMATIONS:
            return{
                ...state,
                societyInformations : action.payload,
                choosenSociety : action.choosenSociety
            }
        case DELETE_MEDECINES_FROM_BILLING:
            return{
               ...state,
               deletedMedecine : action.payload ,
               allSelectedMedecines:state.allSelectedMedecines.filter((el)=>el.code !== state.deletedMedecine.code),
               selectedMedecines:state.selectedMedecines.filter((el)=>el.code !== state.deletedMedecine.code)

            }
        default : 
        return state;
    }
}
export default MedecinesListReducer;