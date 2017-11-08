import React, { Component } from 'react';
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
      <div style={app}>
        <Header />
        <RouteDetails />
        <Footer />
      </div>
    );
  }
}

export default App;
