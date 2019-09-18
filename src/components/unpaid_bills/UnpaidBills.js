import  React,{Component} from 'react'
import UnpaidBillsTabs from "./UnpaidBillsTabs"
import NavMenu from "../nav_menu/NavMenu"
import ConnectedHomePage from "../home_page/HomePage"
import SearchBar from "../common_components/SearchBar"

import {connect} from 'react-redux'

class UnpaidBills extends Component{
    render(){
        return(
            <div className="unpaid-bills-list-page">
                <NavMenu el={'الفواتير غير المسددة'}/>
                <div className='module'>
                    <i className="fas fa-file-invoice-dollar"></i>
                    <p>الفواتير غير المسددة</p>
                </div>
                <SearchBar/>
                <UnpaidBillsTabs/>
            </div>
            
        )
        
    }
}
const mapStateToProps = (state) =>{
    return{
        MainMenuTitles : state.MainMenuTitles
    }

}
const ConnectedUnpaidBills = connect(mapStateToProps)(UnpaidBills)

export default ConnectedUnpaidBills