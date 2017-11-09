import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import RouteDetails from './RouteDetails';

const app = {
  position: 'relative',
  paddingBottom: '6rem',
  minHeight: '100vh',
};

class App extends Component {
  render() {
    return (
      <Router>
        <div style={app}>
          <Header />
          <Route exact path="/" component={Main} />
          <Route path="/details" component={RouteDetails} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
