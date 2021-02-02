import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import List from './components/List';
import { Provider } from 'react-redux';
import store from './store';
import ItemModal from './components/ItemModal';
import { Container, Col } from 'reactstrap';
import { loadUser } from './actions/authActions';
import Footer from './components/Footer';

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
      <Container className='contain'>
        <Col className="App" xs="14" sm="12" md={{ size: 8, offset: 2 }}>
          <Provider store={store}>
            <div className="App">
              <NavBar />
              <div className="App-body">
                <Container>
                  <ItemModal />
                  <List />
                </Container>
              </div>
              <Footer className="Footer" />
            </div>
          </Provider>
        </Col>
      </Container>
    );
  }
}

export default App;
