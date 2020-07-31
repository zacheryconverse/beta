import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import List from './components/List';
import { Provider } from 'react-redux';
import store from './store';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';
import { loadUser } from './actions/authActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <div className="App-body">
            <Container>
              <ItemModal />
              <List />
              <img src={logo} className="App-logo" alt="logo" />
            </Container>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
