import React, { Component } from 'react';
import { fetchPopularCities, fetchLattitudeLongtitude } from '../../apiCalls';
import FormInput from '../../Components/FormInput/FormInput';
import Weather from '../../Components/Weather/Weather';
import WeatherCard from '../../Components/WeatherCard/WeatherCard';
import './App.css';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadCities } from '../../actions/index';

class App extends Component {
  componentDidMount = async () => {
    fetchPopularCities().then(cities => {
      this.props.loadCities(cities);
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className='app'>
        <h1>Weather App</h1>
        <FormInput />
        <Weather />
        <WeatherCard />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadCities: cities => dispatch(loadCities(cities))
});

const mapStateToProps = state => ({
  cities: state.cities
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
