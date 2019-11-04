import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FormInput.scss';
import {
  targetCity,
  getLatLong,
  setWeatherInfo,
  getCurrentStation,
  loadCities,
  loadWeather
} from '../../actions';
import {
  fetchLatLong,
  fetchPopularCities,
  fetchUsingStationID
} from '../../apiCalls';
import { Redirect } from 'react-router';

export class FormInput extends Component {
  constructor() {
    super();
    this.state = {
      weatherState: []
    };
  }
  handleCity = event => {
    this.props.targetCity(event.target.value);
    fetchPopularCities(event.target.value);
  };

  handleCityInput = event => {
    event.preventDefault();
    fetchPopularCities(this.props.selectedCity);
    this.props.loadCities(this.props.selectedCity);
  };

  handleLatLong = event => {
    this.props.getLatLong(event.target.value);
    fetchLatLong(event.target.value);
  };

  handleGetCurrentStation = event => {
    console.log(event.target.value);
    this.props.getCurrentStation(event.target.value);
    // fetchUsingStationID(this.props.currentStation);
  };

  handleGetWeather = event => {
    event.preventDefault();
    console.log('Get Weather Button');
  };

  handleGetWeatherWithStationID = async event => {
    event.preventDefault();
    const x = this.props.stationIDs.map(
      async x => await fetchUsingStationID(x)
    );

    return Promise.all(x);
  };

  grabWeatherDataWithStationID = async event => {
    event.preventDefault();
    const weather = await this.handleGetWeatherWithStationID(event);
    console.log(weather);
    this.setState({ weatherState: weather });
    this.props.setWeatherInfo(weather);
    window.alert(
      'Weather Data Now In Place inside weatherInformation Redux Store'
    );
  };

  getSpecificWeather = event => {
    event.preventDefault();
    console.log(this.props);
    console.log(this.state);
    const x = this.state.weatherState.map((city, i) => {
      return city.consolidated_weather[i];
    });
    console.log(x);
    return x;
  };

  render() {
    console.log(this.props);
    return (
      <div className='form-section'>
        <section className='form'>
          <h1>USE WEATHER STATION ID</h1>
          <form>
            <input
              name='station'
              type='text'
              value={this.props.currentStation}
              placeholder='Weather Station ID'
              onChange={this.handleGetCurrentStation}
              className='form-input'
            />

            <button
              onClick={this.grabWeatherDataWithStationID}
              className='submit-button'
            >
              Send Station Data
            </button>
            <button onClick={this.getSpecificWeather} className='submit-button'>
              Get Specific Weather
            </button>
          </form>
          <h1>CITY LOOKUP</h1>
          <form>
            <input
              name='city'
              type='text'
              value={this.props.selectedCity}
              placeholder='City'
              onChange={this.handleCity}
              className='form-input'
            />

            <button onClick={this.handleCityInput} className='submit-button'>
              Get Weather
            </button>
          </form>
          <h1>LATITUDE and LONGITUDE</h1>
          <form>
            <input
              name='lat-long'
              type='text'
              value={this.props.latLong}
              placeholder='Latitude and Longitude'
              onChange={this.handleLatLong}
              className='form-input'
            />

            <button onClick={this.handleGetWeather} className='submit-button'>
              Get Weather
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  targetCity: cityName => dispatch(targetCity(cityName)),
  getLatLong: latLong => dispatch(getLatLong(latLong)),
  setWeatherInfo: weatherInfo => dispatch(setWeatherInfo(weatherInfo)),
  getCurrentStation: currentStation =>
    dispatch(getCurrentStation(currentStation)),
  loadCities: cities => dispatch(loadCities(cities)),
  loadWeather: stationIDs => dispatch(loadWeather(stationIDs))
});

export const mapStateToProps = state => ({
  selectedCity: state.targetCity,
  latLong: state.latLong,
  stationIDs: state.stationIDs,
  weatherInfo: state.weatherInfo,
  currentStation: state.currentStation,
  cities: state.cities
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormInput);
