import  React, {Component} from 'react'
import "./LoadingHOC.css";
import {connect} from 'react-redux'
import {compose} from 'redux'
import {
    getMedecinesList
} from '../../redux/actions/MedecinesList'
import {getDoctorsList} from '../../redux/actions/DoctorsList'

const BasicHoc = (WarppedComponent, selectedData) =>{
    return class BasicHoc extends Component {
        constructor(props){
            super(props)
            this.state={
                data : [],
                isLoading: this.props.isLoading
            }
        }
        componentDidUpdate(prevProps, prevState) {
            console.log('didupdate :'+this.props.isLoading)
            console.log('did update state :'+this.state.data)
            if (prevProps.isLoading !== this.state.isLoading && prevProps.data !== this.state.data) {
                this.setState({isLoading: this.props.isLoading})
                console.log('if update :'+this.state.isLoading)
                console.log('prevprops :'+prevProps.isLoading)
            }
        }
        componentDidMount(){
            console.log('Didmount :'+ selectedData())
            this.setState({
                data : this.state.data.concat(selectedData())
            })
            if(selectedData() === 'Medical Table')
            {this.props.getMedecinesList()}
            if(selectedData() === 'Doctors Table')
            {
                this.props.getDoctorsList()
                console.log('Didmount :'+this.state.data)
            }
            if(selectedData() === 'Patient Table' && this.props.PatientsList.clicked )
            {this.props.getInPatientList()}  
        }
        render(){
            console.log('render :'+this.state.isLoading)
           return  ( this.state.isLoading === false? <div className="loader"></div> : <WarppedComponent  />)
        }}}
        const mapStateToProps = state =>{
            return {
                searchingResult : state.SearchingAndHOCReducer,
                medecinesList : state.MedecinesListReducer,
                doctorsList : state.DoctorsListReducer,
                isLoading : state.isLoadingReducer,
                PatientsList : state.PatientsListReducer
            }
        };
        const mapDispatchToProps = dispatch =>({
            getMedecinesList :()=>{
                dispatch(getMedecinesList());
            },
            getDoctorsList :()=>{
                dispatch(getDoctorsList());
            }
        })
        const ComposedBasicHOC =compose(connect(
            mapStateToProps,
            mapDispatchToProps
        ),BasicHoc);
       
        export default ComposedBasicHOC;