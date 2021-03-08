import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
import logo from '../logo.svg';

class List extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;
    const { isAuthenticated } = this.props;
    return (
      <Container>
        {isAuthenticated ? (
          <ListGroup>
            <span className="lead">
              <strong>{items ? `This route has ${items.length} moves` : ''}</strong>
            </span>
            {items.map(({ _id, name }) => (
              <ListGroupItem key={_id}>
                <Button
                  className="edit-btn"
                  color="secondary"
                  size="sm"
                  onClick={() => this.setState((state) => ({})) }
                >
                  -
                </Button>
                {name}
                <Button
                  className="remove-btn"
                  color="warning"
                  size="sm"
                  onClick={this.onDeleteClick.bind(this, _id)}
                >
                  &times;
                </Button>
              </ListGroupItem>
            ))}
          <img src={logo} className="App-logo ml-0" alt="logo" />
          </ListGroup>
        ) : (
          ''
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getItems, deleteItem })(List);
