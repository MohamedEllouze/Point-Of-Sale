import  React,{Component} from 'react'
import NavMenu from '../nav_menu/NavMenu'
import './CashPatient.scss'
class CashPatient extends Component{
    render(){
        return(
            <div className='cash-patient-page'>
                <NavMenu el='نقدي'/>
                <h1>Cash patient</h1>
                <h5>نقدي</h5>
            </div>
        )
        
    }
}
export default CashPatient