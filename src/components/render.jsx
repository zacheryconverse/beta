// import React, { useState } from 'react';
import React, { Component, Fragment } from 'react';
// import ListItem from './ListItem';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../mountains.svg';

// const List = ({ items }) => {
//   const [state, setState] = useState({
//     moves: [],
//   });

class List extends Component {
  static propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  componentDidMount() {
    this.props.getItems();
  }

  // componentDidUpdate(prevProps) {
  //   const { isAthenticated } = this.props.auth;
  //   if (isAthenticated !== null) {
  //     this.props.getItems();
  //   }
  // }

  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;
    const { isAthenticated } = this.props;

    const listLinks = (
      <Fragment>
        <Container>
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
                  onClick={() => {
                    this.setState((state) => ({}));
                  }}
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
          </ListGroup>
        </Container>
      </Fragment>
    );

    return (
      <Container>
        {isAthenticated ? listLinks : <Logo />}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated,
  auth: state.auth,
});

export default connect(mapStateToProps, { getItems, deleteItem })(List);
