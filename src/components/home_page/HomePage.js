import React from 'react'
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
import MainComponents from './MainComponents'
import ConnectedNavMenu from '../nav_menu/NavMenu'
import'./HomePage.scss'
const HomePage = ({MainMenuTitles})=>{
    return(
        <div className = 'home-page'>
            <Router>
                <div className="App">
                    <Route path={"/"} render={
                        ()=>{
                        return(
                            <div>
                                <ConnectedNavMenu/>
                                <div className='module'>
                                    <i className="fas fa-capsules"></i>
                                    <p>الصيدلية الخارجية</p>
                                </div>
                                
                                <div className='main-menu'>
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
                        <Route path={"/unpaid-bills/"} component={UnpaidBills}  exact />                    
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
const ConnectedHomePage = connect(mapStateToProps)(HomePage)
console.log(myStore.getState())

export default ConnectedHomePage