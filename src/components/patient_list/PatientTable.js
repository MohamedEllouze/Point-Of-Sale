import React,{Component} from 'react'
import {connect} from 'react-redux'
import { Table } from 'reactstrap';
import {
    getInPatientList,
    getOPDPatientList,
    getCashPatientList,
    addPatientToReception,
} from '../../redux/actions/PatientsList'
import {pricePerCategory} from '../../redux/actions/MedecinesList'
import ComposedBasicHOC from '../common_components/BasicHOC';

class PatientTable extends Component{
    constructor(props){
        super(props)    
    }
    
    render(){
        return(
            <div className='hole-table'>
                <div>
                    {this.props.PatientsList.patients
                    .filter(el=>el.code.includes(this.props.searchingResult.search) || el.codePatient.includes(this.props.searchingResult.search) || el.nomCompletEn.includes(this.props.searchingResult.search))
                    .map((el,index)=>
                        <div key={index} className="patient-ligne">
                            <Table hover>
                                <tbody>                          
                                    <tr onClick={()=>{
                                        console.log(el.code)
                                        this.props.addPatientToReception(el)
                                        }}>
                                        
                                        <th scope="row"></th>
                                        <td> {el.codePatient || <p>--</p>}</td>
                                        <td>{el.code || <p>--</p>}</td>
                                        <td>{el.nomCompletEn || <p>--</p>}</td>
                                        <td> {el.convention &&
                                                                <p>
                                                                    {el.convention.designationAr}

                                                                </p> || <p>--</p>}</td>
                                        <td>  {el.societe &&
                                                                <p>
                                                                    {el.societe.designation}

                                                                </p> || <p>--</p>}</td>

                                                                
                                    </tr>
                                </tbody>
                            </Table>      
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        PatientsList : state.PatientsListReducer,
        searchingResult : state.SearchingAndHOCReducer

    }
};
const mapDispatchToProps = dispatch => ({
    getInPatientList : ()=>{
        dispatch(getInPatientList());
    },
    getOPDPatientList : ()=>{
        dispatch(getOPDPatientList());
    }, 
    getCashPatientList :()=>{
        dispatch(getCashPatientList());
    },
    addPatientToReception :(selectedPatient)=>{
        dispatch(addPatientToReception(selectedPatient));
    },
    pricePerCategory:(selectedPatient)=>{
        dispatch(pricePerCategory(selectedPatient));
    }
})
const ConnectedPatientTable = connect(
    mapStateToProps,
    mapDispatchToProps
)(PatientTable);
export default ConnectedPatientTable