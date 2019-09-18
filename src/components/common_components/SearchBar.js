import React,{Component}from 'react'
import './DataTable.scss'
import {connect} from 'react-redux'
import {searching} from '../../redux/actions/SearchingAndHOC'

class SearchBar extends Component{
    constructor(props){
        super(props)
       
    }
    render(){
        console.log(this.props.searchingResult)
        return(
           <div className="search-bar">
               <input 
                    type='text'
                    placeholder=" بحث ..."
                    className='input-search'
                    onChange={(event)=>{this.props.searching(event.target.value)}}
                    value={this.props.searchingResult.search}
                /> 
                <i className="fas fa-search"></i>

           </div>
           
            
        )
    }
        
}
const mapStateToProps = state =>{
    return {
        searchingResult : state.SearchingAndHOCReducer
    }
};
const mapDispatchToProps = dispatch =>({
    searching:(event)=>{
        dispatch(searching(event));
    }

})
const ConnectedSearchBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);
export default ConnectedSearchBar;