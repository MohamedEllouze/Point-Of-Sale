import  React,{Component} from 'react'
import NavMenu from "../nav_menu/NavMenu"
import { Button } from 'reactstrap';
import './PatientList.scss';
import ConnectedPatientTable from './PatientTable'
import ReceptionTable from '../common_components/ReceptionTable'
import {getInPatientList, 
        getOPDPatientList,
        getCashPatientList
    } from '../../redux/actions/PatientsList'
import {connect} from 'react-redux'
import SearchBar from '../common_components/SearchBar'
import ConnectedDataTableHeader from '../common_components/DataTableHeader';
class PatientList extends Component{
    constructor(props){
        super(props)
        this.state={
            tableHeader : 'Patient List'
        }
    }
    render(){
        console.log(typeof(this.props.getInPatientList))
        console.log(typeof(this.props.getInPatientList()))

        return(
            <div className='patient-list-page'> 
               <div className="fix-part">
                    <NavMenu el={'قائمة المرضى'}/>
                    <div className='module'>
                    <i className="fas fa-user-injured"></i>
                    <p>قائمة المرضى</p>
                    </div>
                    <SearchBar/>
                    <ReceptionTable/>
                    <div className='nav-buttons'>
                        <Button outline color="secondary" onClick={this.props.getInPatientList} >
                            In Patient
                            <br/>
                            داخلي
                        </Button>
                        <Button outline color="secondary"  onClick={this.props.getOPDPatientList}>
                            OPD
                            <br/>
                            العيادات الخارجية
                        </Button>
                        <Button outline color="secondary" onClick={this.props.getCashPatientList}>
                            Cash Patient
                            <br/>
                            نقدي
                        </Button>
                    </div>
                    <ConnectedDataTableHeader object={this.state.tableHeader}/>
                </div>
                <ConnectedPatientTable object={this.state} />
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        inPatientList : state.InPatientsListReducer
    }
};;
const mapDispatchToProps = dispatch => ({
    getInPatientList : ()=>{
        dispatch(getInPatientList());
    },
    getOPDPatientList : ()=>{
        dispatch(getOPDPatientList());
    }, 
    getCashPatientList :()=>{
        dispatch(getCashPatientList());
    }
})
const ConnectedPatientList = connect(
mapStateToProps,
mapDispatchToProps
)(PatientList);
export default ConnectedPatientList