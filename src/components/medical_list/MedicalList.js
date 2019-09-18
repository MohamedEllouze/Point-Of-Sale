import  React,{Component} from 'react'
import NavMenu from '../nav_menu/NavMenu'
import ConnectedMedicalTable from './MedicalTable'
import './MedicalList.scss'
import ConnectedSelectedMedicalList from './SelectedMedicalList'
import SearchBar from '../common_components/SearchBar'
import ConnectedDataTableHeader from '../common_components/DataTableHeader'

class MedicalList extends Component{
    constructor(props){
        super(props)
        this.state={
            medicines : [],
            tableHeader : 'Medical List'
        }
    }
  
    render(){
        return(
            <div className='medical-list-page'>
                <NavMenu el={'قائمة الأدوية'}/>
                <div className='module'>
                    <i className="fas fa-medkit" ></i>
                    <p>قائمة الأدوية</p>
                </div>
                <SearchBar/>
                <ConnectedSelectedMedicalList  object={this.state.tableHeader} />
                <ConnectedDataTableHeader object={this.state.tableHeader}/>
                <ConnectedMedicalTable object={this.state}/>

            </div>
        )
        
    }
} 
export default MedicalList