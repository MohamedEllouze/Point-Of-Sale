import React,{Component} from 'react'
import Inscription from './Inscription';
import SettingsMenu from './SettingsMenu';
import {connect} from 'react-redux'

import './NavMenu.scss'
class NavMenu extends Component{
    
    
    render(){
    var selectedPatient = this.props.PatientsList.patients
                                .filter((el,index)=>{return index === this.props.PatientsList.patient})[0]
        return(
            <div className="nav-menu">
                <div className='nav-bar'>
                    <SettingsMenu/>
                    <Inscription/>
                </div>
                <div>
                    <p>
                        {this.props.PatientsList.clicked && this.props.PatientsList.patient.nomCompletEn}
                    </p>
                </div>
                <div className='path'>
                    <h1>
                        <small>
                            CliniSys
                            <span>
                                Erp
                            </span>
                        </small>
                    </h1>
                    <strong>
                    الصيدلية الخارجية
                    </strong>
                    <strong>
                        {this.props.el}

                    </strong>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {
        PatientsList : state.PatientsListReducer
    }
};
const ConnectedNavMenu = connect(
    mapStateToProps
)(NavMenu);
export default ConnectedNavMenu;