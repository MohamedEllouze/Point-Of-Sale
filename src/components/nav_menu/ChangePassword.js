import React from 'react';
import {Col,FormGroup,Label,Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
  

  }

  

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.props.changeModal}>{this.props.buttonLabel}</Button>

       <Modal isOpen={this.props.modal} changeModal={this.props.changeModal} className={this.props.className}>
                            <ModalHeader changeModal={this.props.changeModal}>Modal title</ModalHeader>
                            <ModalBody>
                            <div class="form-group row">
                      <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                      <div class="col-sm-10">
                        <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                      <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                      </div>
                    </div>        
                            </ModalBody>
                            <ModalFooter>
                              <Button color="primary" onClick={this.props.changeModal}>Do Something</Button>{' '}
                              <Button color="secondary" onClick={this.props.changeModal}>Cancel</Button>
                            </ModalFooter>
                          </Modal>
      </div>
    );
  }
}

export default ChangePassword;