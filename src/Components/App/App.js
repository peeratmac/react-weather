import React, { Component } from 'react';
import {
  fetchPopularCities,
  fetchLattitudeLongtitude,
  fetchCity,
  fetchPopularWeather
} from '../../apiCalls';
import FormInput from '../../Components/FormInput/FormInput';
import Weather from '../../Components/Weather/Weather';
import WeatherCard from '../../Components/WeatherCard/WeatherCard';
import './App.css';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadCities, loadWeather } from '../../actions/index';

class App extends Component {
  componentDidMount = async () => {
    fetchPopularCities('NEW').then(cities => {
      console.log(cities);
      this.props.loadCities(cities);
      const IDs = cities.map(city => city.woeid);
      console.log(IDs);
      this.props.loadWeather(IDs);
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className='app'>
        <h1>Weather App</h1>
        <FormInput />
        <WeatherCard />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadCities: cities => dispatch(loadCities(cities)),
  loadWeather: stationIDs => dispatch(loadWeather(stationIDs))
});

const mapStateToProps = state => ({
  cities: state.cities,
  stationIDs: state.stationIDs
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
