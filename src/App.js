import React, { Component } from 'react';
import logo from './icons/university.svg';
import './App.css';
import RatingsContainer from './containers/ratings';
import HeaderComponent from './components/header/HeaderComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<header className="App-header">*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h1 className="App-title">Post a Review of your College or University </h1>*/}
        {/*</header>*/}
        <HeaderComponent/>
        <RatingsContainer />
      </div>
    );
  }
}

export default App;
