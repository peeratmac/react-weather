import React, { Component } from 'react';
import { fetchPopularCities } from '../../apiCalls';
import './App.css';

class App extends Component {
  componentDidMount = async () => {
    fetchPopularCities();
  };

  render() {
    return (
      <div>
        <h1>Test</h1>
      </div>
    );
  }
}

export default App;
