import React from 'react';
import './DataTable.scss'
import {connect} from 'react-redux'
import myStore from '../../redux/store/Store'


const DataTableHeader =(props)=> {
    return (
        <div className='table-header'>
          <div className='ligne'>
           <h5>
            {props.MainMenuTitles.map((el, index)=>
                <div key={index}>
                  {el.submenu && (props.object === el.name) &&
                    <div className="cases">
                        
                      {el.submenu.map((el, index)=>
                        <div key={index} className="case"> 
                          {el.name}
                        </div>
                      )}
                  
                    </div>
                  }
                </div>
              
              )}
           </h5>
          </div>            
        </div>
       
    );
  }
const mapStateToProps=(state)=>{
  return{
    MainMenuTitles : state.MainMenuTitles
  }
}
const ConnectedDataTableHeader = connect(mapStateToProps)(DataTableHeader)
console.log(myStore.getState())
export default ConnectedDataTableHeader