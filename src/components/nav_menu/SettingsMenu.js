import React from 'react';
import ChangePassword from './ChangePassword'
import {Modal,ModalHeader,ModalBody,ModalFooter,Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class SettingsMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.changeModal=this.changeModal.bind(this);
    this.state = {
      dropdownOpen: false,
      modal : false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  changeModal(){
    this.setState(el => ({
      modal: !el.modal
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
        <i className="fas fa-cog"></i>
        </DropdownToggle>
        
        <DropdownMenu>

          <DropdownItem >
            <h3 color="link" onClick={this.changeModal}>
              Change Password
            </h3>

            <Modal isOpen={this.state.modal} changeModal={this.changeModal} className={this.props.className}>
              <ModalHeader changeModal={this.changeModal}>
                Modal title
              </ModalHeader>
              <ModalBody>
                 <div class="form-group row">
                  <label for="inputPassword" class="col-sm-2 col-form-label">Current Password</label>
                  <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword" placeholder="Current Password..." />
                  </div>
                </div>   
                <div class="form-group row">
                  <label for="inputPassword" class="col-sm-2 col-form-label">New Password</label>
                  <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword" placeholder="New Password..." />
                  </div>
                </div>   
                <div class="form-group row">
                  <label for="inputPassword" class="col-sm-2 col-form-label">Confirm Password</label>
                  <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword" placeholder="Confirm Password..." />
                  </div>
                </div>        
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.changeModal}>Save</Button>{' '}
                <Button color="secondary" onClick={this.changeModal}>Cancel</Button>
              </ModalFooter>
            </Modal>
          
            
          </DropdownItem>
          <DropdownItem >Help</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Log out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
