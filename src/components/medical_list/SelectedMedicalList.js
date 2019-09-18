import React,{Component} from 'react';
import './MedicalList.scss'
import {connect} from 'react-redux'
import {Table, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {
    getMedecinesList, 
    addMedecinesToBilling,
    pricePerCategory,
    societyInformations,
    deleteMedecinesFromBilling,
    
} from '../../redux/actions/MedecinesList'
import {postQuittanceList} from '../../redux/actions/QuittanceList'
class  SelectedMedicalList extends Component {
    constructor(props){
        super(props)
        this.state = {
            modal: false
          };
        this.toggle = this.toggle.bind(this);
 
    }
    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    PECPart = () =>{
        let prixTTC = this.props.medecinesList.allSelectedMedecines
        .reduce((total,el)=> this.props.medecinesList.pricePerCategory.natureException === "REM" ? total + el.prixVente *(100-this.props.medecinesList.pricePerCategory.taux)/100 * (1 + el.valeurTvaVente / 100) : total + el.prixVente *(100+this.props.medecinesList.pricePerCategory.taux)/100 * (1 + el.valeurTvaVente / 100) ,0)    
        let prixTTCFinal =  this.props.medecinesList.societyInformations.remiseConventionnellePharmacie === "S" || !(this.props.medecinesList.societyInformations) ? this.props.medecinesList.allSelectedMedecines.reduce((total,el)=>total + el.prixVente * (1 + el.valeurTvaVente / 100)* (1-this.props.medecinesList.pricePerCategory.tauxCouverture/100),0) : prixTTC

        return prixTTCFinal * (this.props.medecinesList.pricePerCategory.tauxCouverture/100)
    }
    PatientPart = () =>{
        let prixTTC = this.props.medecinesList.allSelectedMedecines
        .reduce((total,el)=> this.props.medecinesList.pricePerCategory.natureException === "REM" ? total + el.prixVente *(100-this.props.medecinesList.pricePerCategory.taux)/100 * (1 + el.valeurTvaVente / 100) : total + el.prixVente *(100+this.props.medecinesList.pricePerCategory.taux)/100 * (1 + el.valeurTvaVente / 100) ,0)    
        let prixTTCFinal =  this.props.medecinesList.societyInformations.remiseConventionnellePharmacie === "S" || !(this.props.medecinesList.societyInformations) ? this.props.medecinesList.allSelectedMedecines.reduce((total,el)=>total + el.prixVente * (1 + el.valeurTvaVente / 100)* (1-this.props.medecinesList.pricePerCategory.tauxCouverture/100),0) : prixTTC

        return prixTTCFinal - this.PECPart()
    }
    
    render(){
        let prixTTC = this.props.medecinesList.allSelectedMedecines
        .reduce((total,el)=> this.props.medecinesList.pricePerCategory.natureException === "REM" ? total + el.prixVente *((100-this.props.medecinesList.pricePerCategory.taux)/100 )* (1 + el.valeurTvaVente / 100) : total + el.prixVente *(100+this.props.medecinesList.pricePerCategory.taux)/100 * (1 + el.valeurTvaVente / 100) ,0)    
        let prixTTCFinal =  (this.props.medecinesList.choosenSociety && this.props.medecinesList.societyInformations.remiseConventionnellePharmacie === "S") || !(this.props.medecinesList.societyInformations) ? this.props.medecinesList.allSelectedMedecines.reduce((total,el)=>total + el.prixVente * (1 + el.valeurTvaVente / 100)* (1-this.props.medecinesList.pricePerCategory.tauxCouverture/100),0) : prixTTC
        console.log(this.props.medecinesList.deletedMedecine)
        return (
            <div className="medecines-table" >
                <div className='results-table'>
                        <div className="ligne">
                            <span>{prixTTCFinal.toFixed(2) ||(this.props.medecinesList.clicked && this.props.medecinesList.allSelectedMedecines.reduce((total,el)=>total + el.prixVente * (1 + el.valeurTvaVente / 100),0).toFixed(2))}</span>
                            <span>:قيمة الأدوية</span>
                        </div>
                        <div className="ligne">
                            <span>{this.props.medecinesList.choosenSociety && this.props.medecinesList.clicked && this.PECPart().toFixed(2) || (0).toFixed(2)}</span>
                            <span>القيمة على حساب الجهة</span>
                        </div>
                        <div className="ligne">
                            <span>{this.props.medecinesList.choosenSociety && this.props.medecinesList.clicked ? this.PatientPart().toFixed(2) : (this.props.medecinesList.clicked && this.props.medecinesList.allSelectedMedecines.reduce((total,el)=>total + el.prixVente * (1 + el.valeurTvaVente / 100),0).toFixed(2)) || (0).toFixed(2)}</span>
                            <span>القيمة على حساب المريض</span>
                        </div>
                        <div>
                            <Button outline color="secondary" onClick={this.toggle} style={{width: '90%'}}>Billing فوترة</Button>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalHeader toggle={this.toggle}>Clinisys</ModalHeader>
                                <ModalBody>
                                    هل أنت متأكد من الحفض؟      
                                </ModalBody>
                                <ModalFooter >
                                    <Button color="primary" onClick={()=>{
                                        this.toggle()
                                        this.props.postQuittanceList()
                                    }}>
                                            نعم
                                    </Button>{' '}
                                    <Button color="secondary" onClick={this.toggle}>لا</Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </div>
                <div className='main-table'>
                    <div className='table-header'>
                        <div className='ligne'>
                            <h5>
                                {this.props.MainMenuTitles.map((el, index)=>
                                    <div key={index}>
                                        {el.selectedMedicalSubmenu && (this.props.object === el.name) &&
                                            <div className="cases selected-medical-list">
                                                
                                                {el.selectedMedicalSubmenu.map((el, index)=>
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
                    <div className="selected-table">
                    {this.props.medecinesList.clicked && this.props.medecinesList.selectedMedecines.map((el,index)=>

                        <Table  key={index}  bordered hover  className="medecines" onClick={()=>{
                                this.props.deleteMedecinesFromBilling(el)
                                }}>
                            <tbody >
                                    <tr>
                                        {<td>{this.props.medecinesList.allSelectedMedecines.filter((element)=> element.code === el.code).length <= el.quantity && (this.props.medecinesList.allSelectedMedecines.filter((element)=> element.code === el.code).length * el.prixVente*(1+el.valeurTvaVente/100)).toFixed(2) || (el.quantity * el.prixVente*(1+el.valeurTvaVente/100)).toFixed(2)}</td>}
                                        {<td>{(el.prixVente*(1+el.valeurTvaVente/100)).toFixed(2)}</td>||<p>--</p>}
                                        {<td>{el.prixVente}</td>||<p>--</p>}
                                        {<td>{this.props.medecinesList.allSelectedMedecines.filter((element)=> element.code === el.code).length <= el.quantity && this.props.medecinesList.allSelectedMedecines.filter((element)=> element.code === el.code).length || el.quantity}</td>}
                                        {<td>{el.unityDesignation}</td>||<p>--</p>}
                                        {<td>{el.designationSec}</td>||<p>--</p>}

                                    </tr> 
                            </tbody>
                        </Table>
                    )}

                        
                        </div>
                    </div>

                        
                    
                    

            </div>
           
        )
    }
    
  }
// let billingList = {
//     "numbonComplementaire_Renamed": null,
//     "partiePatient":Math.trunc(this.PatientPart()),
//     "partiePEC": this.PatientPart(this.PECPart()),
//     "baseTvaFactureList": null,
//     "mvtStoAVCollection": null,
//     "client": null,
//     "reglementDTOs": null,
//     "mntbon": Math.trunc(prixTTCFinal) || Math.trunc(this.props.medecinesList.allSelectedMedecines.reduce((total,el)=>total + el.prixVente * (1 + el.valeurTvaVente / 100),0)),
//     "memop": "",
//     "idOrdonnance": null,
//     "numbonComplementaire": null,
//     "numdoss": "XP1900000131",
//     "coddep": 530,
// 	"mvtQuittance": [{
// 		"tauxCouverture": 0.0,
// 		"prixPEC": 0.0,
// 		"prixPatient": 0.0,
// 		"tauxPEC": 0.0,
// 		"totalArticle": 0.0,
// 		"remise": 0.0,
// 		"majoration": 0.0,
// 		"unityDesignation": null,
// 		"unityCode": 0,
// 		"categDepot": "PH",
// 		"lotInter": null,
// 		"numbon": null,
// 		"codtva": 0,
// 		"tautva": 0.0,
// 		"priuni": 0.0,
// 		"qteRestante": 0.0,
// 		"desArtSec": null,
// 		"desart": null,
// 		"codart": 55560,
// 		"lot": "181209",
// 		"memoart": "",
// 		"unite": 138,
// 		"quantite": 1.0,
// 		"datPer": "2021-12-30T00:00:00",
// 		"prixVente": (el.prixVente*(1+el.valeurTvaVente/100)).toFixed(2)
//     }],
// 	"typbon": null,
// 	"numbon": null
// }
const mapStateToProps=(state)=>{
  return{
    MainMenuTitles : state.MainMenuTitles,
    medecinesList : state.MedecinesListReducer,
    PatientsList : state.PatientsListReducer,
  }
}
const mapDispatchToProps = dispatch =>({
    getMedecinesList :()=>{
        dispatch(getMedecinesList());
    },
    addMedecinesToBilling:(selectedMedecine)=>{
        dispatch(addMedecinesToBilling(selectedMedecine));
    },
    pricePerCategory:(selectedMedecine, selectedPatient)=>{
        dispatch(pricePerCategory(selectedMedecine, selectedPatient));
    },
    societyInformations:(selectedPatient)=>{
        dispatch(societyInformations(selectedPatient));
    },
    deleteMedecinesFromBilling : (deletedMedecine) =>{
        dispatch(deleteMedecinesFromBilling(deletedMedecine));
    },
    postQuittanceList : () =>{
        dispatch(postQuittanceList())
    }

})
const ConnectedSelectedMedicalList = connect(mapStateToProps, mapDispatchToProps)(SelectedMedicalList)
export default ConnectedSelectedMedicalList