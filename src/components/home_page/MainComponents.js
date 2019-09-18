import React,{Component} from 'react'
import'./HomePage.scss'
import {Link} from 'react-router-dom';


class MainComponents extends Component{
   
render(){
    return(
            <div className='main-components'>
                <Link to={this.props.el.name.toLowerCase().split('').map((element)=>element===" " ? element.replace(" ","-"): element).join('')}>
                    {this.props.el.image}

                    <span>{this.props.el.nameAr}</span>
                </Link>
                

            </div>
        
    )
        
    
}
}
export default MainComponents 