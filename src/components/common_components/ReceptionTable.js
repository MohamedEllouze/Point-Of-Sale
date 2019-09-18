import React,{Component} from 'react'
import { Table } from 'reactstrap';
import {connect} from 'react-redux'
import './DataTable.scss'
class ReceptionTable extends Component {

    render(){
        
        return(
            
            <div className="reception-table-active">
                <h4>إستقبال</h4>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>نوع الدخول</th>
                            <th>رقم المريض</th>
                            <th>إسم المريض</th>
                            <th>الاتفاقية</th>
                            <th>إسم الطبيب</th>

                        </tr>
                    </thead>
                        <tbody className="patients">
                            <tr >
                                <td>  
                                    {this.props.PatientsList.patientType || <p>--</p>}
                                </td>
                                <td>
                                    {this.props.PatientsList.clicked && this.props.PatientsList.patient.codePatient || <p>--</p>}
                                    
                                </td>
                                <td>        
                                    {this.props.PatientsList.clicked && this.props.PatientsList.patient.nomCompletEn || <p>--</p>}
                                </td>
                                <td>   
                                    {this.props.PatientsList.clicked && this.props.PatientsList.patient.convention &&
                                                                <p>
                                                                    {this.props.PatientsList.patient.convention.designationAr}

                                                                </p> || <p>--</p>}
                                </td>
                                <td>
                                    {this.props.doctorsList.clicked && this.props.doctorsList.addedDoctor.nomIntervAr || <p>--</p>}
                                </td>
                            </tr>
                        </tbody>
                    </Table>


                
                              

            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        PatientsList : state.PatientsListReducer,
        doctorsList : state.DoctorsListReducer
    }
  }
  const ConnectedReceptionTable = connect(mapStateToProps)(ReceptionTable)
export default ConnectedReceptionTable;