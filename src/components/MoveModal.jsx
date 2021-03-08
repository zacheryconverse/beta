import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Button } from 'reactstrap';

class MoveModal extends Component {
  state = {
    modal: false,
    name: '',
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name: this.state.name,
    };
    this.props.addItem(newItem);
    this.toggle();
  };

  render() {
    return (
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Move Details</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Input
                type="text"
                name="name"
                id="item"
                placeholder="Add a move"
                onChange={this.onChange}
              />
              <Button color="dark" style={{ marginTop: '2rem' }} block>
                Next Move
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    );
  }
}

export default MoveModal;
