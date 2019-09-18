import React,{Component} from 'react'
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import {getDoctorsList} from '../../redux/actions/DoctorsList'
import './DoctorsList.scss'
import {
    addDoctorToReception
} from '../../redux/actions/DoctorsList'
import ComposedBasicHOC from '../common_components/BasicHOC';


class DoctorsTable extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
           this.props.getDoctorsList()
    
        }

    
render(){
    return(
        <div className='hole-table'>
            <div>

                {
                    this.props.doctorsList.doctors
                    .filter(el=>el.codeSaisie.includes(this.props.searchingResult.search) || el.nomIntervAr.includes(this.props.searchingResult.search))
                    .map((el,index)=>
                        <div key={index} className="doctor-ligne">
                            <Table hover>
       
                                <tbody>
                                    <tr onClick={()=>{this.props.addDoctorToReception(el)}}>
                                        <td> {el.codeSaisie || <p>--</p>}</td>
                                        <td> {el.designationAr || <p>--</p>}</td>
                                        <td> {el.nomIntervAr || <p>--</p>}</td>
                                        <td> {el.codeSpecialite &&
                                                                <p>
                                                                    {el.codeSpecialite.designationAr}

                                                                </p> || <p>--</p>}</td>
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
        doctorsList : state.DoctorsListReducer,
        searchingResult : state.SearchingAndHOCReducer,
        isLoadingReducer : state.isLoadingReducer
    }
};
const mapDispatchToProps = dispatch =>({
    getDoctorsList :()=>{
        dispatch(getDoctorsList());
    },
    addDoctorToReception :(addedDoctor)=>{
        dispatch(addDoctorToReception(addedDoctor));
    }

})
const ConnectedDoctorsTable = connect(
    mapStateToProps,
    mapDispatchToProps
)(DoctorsTable);
export default  ComposedBasicHOC(ConnectedDoctorsTable,()=>'Doctors Table')