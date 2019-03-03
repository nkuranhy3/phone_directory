import React, { Component } from 'react';
import { MDBContainer, MDBInput, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBIcon } from "mdbreact";
import './App.css';

class App extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  logValue = value => {
    console.log(value);
  };
  render() {
    return (
      <div>
        <MDBContainer>
          <MDBBtn onClick={this.toggle} className="mx-auto">
            Add New Phone Directory
        </MDBBtn>
          <MDBModal
            isOpen={this.state.modal}
            toggle={this.toggle}
            size="sm"
            cascading
          >
            <MDBModalHeader
              toggle={this.toggle}
              titleClass="d-inline title"
              className="text-center light-blue darken-3 white-text"
            >
              <MDBIcon icon="pencil-alt" />
              Contact From
          </MDBModalHeader>
            <MDBModalBody>
              <MDBInput label="Your name" />
              <MDBInput label="Your email" iconClass="dark-grey" />
              <div className="text-center mt-1-half">
                <MDBBtn
                  color="info"
                  className="mb-2"
                  onClick={this.toggle}
                >
                  send
                <MDBIcon icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
            </MDBModalBody>
          </MDBModal>
        </MDBContainer>
      </div>
    );
  }
}

export default App;
