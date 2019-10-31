import React, { Component } from 'react';
import { fetchPopularCities } from '../../apiCalls';
import FormInput from '../../Components/FormInput/FormInput';
import Weather from '../../Components/Weather/Weather';
import './App.css';

class App extends Component {
  componentDidMount = async () => {
    fetchPopularCities();
  };

  render() {
    return (
      <div className='app'>
        <h1>Weather App</h1>
        <FormInput />
        <Weather />
      </div>
    );
  }
}

export default App;
