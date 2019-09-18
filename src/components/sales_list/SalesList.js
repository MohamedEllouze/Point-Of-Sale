import  React,{Component} from 'react'
import NavMenu from '../nav_menu/NavMenu'
import "./SalesList.scss"
import SearchBar from "../common_components/SearchBar"
import SalesListTabs from "./SalesListTabs"
class SalesList extends Component{
    render(){
        return(
            <div className="sales-list-page">
                <NavMenu el={'قائمة مبيعات'}/>
                <div className='module'>
                    <i className="fas fa-tasks"></i> 
                    <p>قائمة مبيعات</p>
                </div>
               {/* // <h1>{ new Date().getTime()}</h1> */}
                <SearchBar/>
                <SalesListTabs/>

            </div>
        )
        
    }
}
export default SalesList