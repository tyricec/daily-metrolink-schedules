import React, { Component } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
