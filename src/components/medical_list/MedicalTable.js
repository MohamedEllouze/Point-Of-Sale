import React,{Component} from 'react'
import { Table } from 'reactstrap';
import './MedicalList.scss'
import { connect } from 'react-redux';
import {
    getMedecinesList, 
    addMedecinesToBilling,
    pricePerCategory,
    societyInformations
} from '../../redux/actions/MedecinesList'
import {basicHOC} from '../../redux/actions/SearchingAndHOC'
import ComposedBasicHOC from '../common_components/BasicHOC'


class MedicalTable extends Component{
    constructor(props){
        super(props)
        this.state ={
            data : this.props.medecinesList.medecines
        }
    }
    componentDidMount(){
        this.props.getMedecinesList()
    
        }

    
render(){
    console.log(this.props.medecinesList.medecines.length)
    return(
        <div className='hole-table'>
            <div className="medical-data-table">
                {this.props.medecinesList.medecines
                .filter(el => this.props.searchingResult.search ? el.designationSec.includes(this.props.searchingResult.search): el)
                .map((el,index)=>
                        <div key={index} className="medical-ligne">
                            <Table hover>
                                <tbody>
                                    <tr onClick={()=>{
                                        console.log(el.code)
                                        this.props.addMedecinesToBilling(el)
                                        this.props.PatientsList.clicked ? this.props.pricePerCategory(el, this.props.PatientsList.patient.code) : this.props.pricePerCategory(el,'XP1900000114')
                                        this.props.PatientsList.clicked && this.props.societyInformations(this.props.PatientsList.patient.code)
                                        }}>
                                        <td> {el.designationSec || <p>--</p>}</td>
                                        <td>{el.unityDesignation || <p>--</p>}</td>
                                        <td>{el.quantity || <p>--</p>}</td>
                                        <td>{el.preemptionDate || <p>--</p>}</td>
                                        <td>{el.prixVente || <p>--</p>}</td>
                                    </tr>
                                </tbody>
                             </Table>   
                        </div>)
                }
            </div>
        </div>
    )
}
}
const mapStateToProps = state =>{
    return {
        medecinesList : state.MedecinesListReducer,
        PatientsList : state.PatientsListReducer,
        searchingResult : state.SearchingAndHOCReducer,
        isLoading : state.isLoadingReducer
    }
};
const mapDispatchToProps = dispatch =>({
    getMedecinesList :()=>{
        dispatch(getMedecinesList());
    },
    addMedecinesToBilling:(selectedMedecine)=>{
        dispatch(addMedecinesToBilling(selectedMedecine));
    },
    pricePerCategory:(selectedMedecine, selectedPatient)=>{
        dispatch(pricePerCategory(selectedMedecine, selectedPatient));
    },
    societyInformations:(selectedPatient)=>{
        dispatch(societyInformations(selectedPatient));
    },
    basicHOC : (selectedData)=>{
        dispatch(basicHOC(selectedData))
    }

})
const ConnectedMedicalTable = connect(
    mapStateToProps,
    mapDispatchToProps
)(MedicalTable);
export default ComposedBasicHOC(ConnectedMedicalTable,()=>'Medical Table')