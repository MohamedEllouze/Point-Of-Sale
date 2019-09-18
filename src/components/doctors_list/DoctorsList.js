import  React,{Component} from 'react'
import ConnectedDoctorsTable from './DoctorsTable'
import './DoctorsList.scss'
import NavMenu from "../nav_menu/NavMenu"
import ReceptionTable from '../common_components/ReceptionTable'
import SearchBar from '../common_components/SearchBar'
import ConnectedDataTableHeader from '../common_components/DataTableHeader';
class DoctorsList extends Component{
    constructor(props){
        super(props)
        this.state={
           doctors : [],
            tableHeader : 'Doctors List'
        }
    }
    render(){
        return(
            <div className='doctor-list-page'>
                <NavMenu el={'قائمة الأطباء'}/>
                <div className='module'>
                    <i className="fas fa-user-md"></i>
                    <p>قائمة الأطباء</p>
                </div>
                <SearchBar/>
                <ReceptionTable/>
                
                <ConnectedDataTableHeader object={this.state.tableHeader}/>

                <ConnectedDoctorsTable object={this.state}/>
            </div>
        )
        
    }
}
export default DoctorsList