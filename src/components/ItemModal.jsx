import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { ReactComponent as Logo } from '../mountains.svg';


class ItemModal extends Component {
  state = {
    modal: false,
    name: '',
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
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
    const { isAuthenticated } = this.props;
    return (
      <div>
        {isAuthenticated ? (
          <Button color="dark" style={{ marginTop: '2rem' }} onClick={this.toggle}>
            Add a Move
          </Button>
        ) : (
          <Fragment>
            <Card
              body
              inverse
              style={{
                background: 'radial-gradient(circle 400px, rgb(166 149 107 / 28%), #9198e500)',
                borderColor: 'rgb(166, 149, 107)',
              }}
            >
              <CardHeader className="h3 lead text-muted" style={{ textAlign: 'center' }}>Login or Register to Climb</CardHeader>
              <CardBody style={{ height: '80vh'}}>
                <Logo style={{ alignItems: 'flex-end' }}/>
              </CardBody>
              {/* <CardHeader className="h3 lead" style={{ textAlign: 'center' }}>Login or Register to Climb</CardHeader> */}
            </Card>
          </Fragment>
        )}

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Move Details</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                {/* <Label for="item">Move</Label> */}
                <Input
                  type="text"
                  name="name"
                  id="item"
                  placeholder="Add a move"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: '2rem' }} block>
                  Add Move
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { addItem })(ItemModal);
