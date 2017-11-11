import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/main';
import RouteDetails from './components/details';

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
          <Route path="/details/:route" component={RouteDetails} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
