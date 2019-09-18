import React,{Component} from 'react'
import {connect} from 'react-redux'
import myStore from '../../redux/store/Store'

import {BrowserRouter as Router, Route} from 'react-router-dom';
import PatientList from '../patient_list/PatientList'
import CashPatient from '../cash_patient/CashPatient'
import ClosingUserSession from '../closing_user_session/ClosingUserSession'
import DoctorsList from '../doctors_list/DoctorsList'
import MedicalList from '../medical_list/MedicalList'
import SalesList from '../sales_list/SalesList'
import UnpaidBills from '../unpaid_bills/UnpaidBills'
import './DataTable.scss'
import {Link} from 'react-router-dom';
class MainComponents extends Component {
   render() {
        return(
        <div className='main-components'>
        <Link to={this.props.el.name.toLowerCase().split('').map((element)=>element===" " ? element.replace(" ","-"): element).join('')}>
            <i class="far fa-ellipsis-v-alt"></i>
            <span>{this.props.el.nameAr}</span>
        </Link>
        

    </div>
    )}
}
const VerticalNavMenu = ({MainMenuTitles})=>{
    return(
        <div className = 'vertical-nav-menu'>
            <Router>
                <div className="App">
                    <Route path={"/"} render={
                        ()=>{
                        return(
                            <div>
                                
                                <div className='components-name'>
                                    {MainMenuTitles.map((el,index)=>
                                    
                                    <MainComponents key={index} el={el} />
                                    )}
                                </div>
                            </div>
                        )
                        }
                    } exact/>
                        
                        <Route path={"/patient-list/"} component={PatientList} exact />
                        <Route path={"/cash-patient/"} component={CashPatient} exact />
                        <Route path={"/Closing-user-session/"} component={ClosingUserSession} exact />
                        <Route path={"/doctors-list/"} component={DoctorsList} exact />
                        <Route path={"/medical-list/"} component={MedicalList} exact />
                        <Route path={"/sales-list/"} component={SalesList} exact />
                        <Route path={"/unpaid-bills/"} component={UnpaidBills} exact />                    
                </div>  
            </Router>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return{
        MainMenuTitles : state.MainMenuTitles
    }

}
const ConnectedVerticalNavMenu = connect(mapStateToProps)(VerticalNavMenu)
console.log(myStore.getState())

export default ConnectedVerticalNavMenu