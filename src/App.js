import React, { Component } from 'react';
import './App.css';
import RatingsContainer from './containers/ratings';
import HeaderContainer from './containers/headerContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer/>
        <RatingsContainer />
      </div>
    );
  }
}

export default App;
