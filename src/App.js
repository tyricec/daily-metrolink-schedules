import React, { Component } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const app = {
  position: 'relative',
  minHeight: '100vh',
};

class App extends Component {
  render() {
    return (
      <div style={app}>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
