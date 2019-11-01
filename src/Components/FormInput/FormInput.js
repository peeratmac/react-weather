import React, { Component } from 'react';
import { connect } from 'react-redux';
import { targetCity, getLatLong, setWeatherInfo } from '../../actions';
import {
  fetchLatLong,
  fetchPopularCities,
  fetchUsingStationID
} from '../../apiCalls';

class FormInput extends Component {
  handleCity = event => {
    this.props.targetCity(event.target.value);
    fetchPopularCities(event.target.value);
  };

  handleLatLong = event => {
    this.props.getLatLong(event.target.value);
    fetchLatLong(event.target.value);
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

  render() {
    return (
      <section className='form'>
        <h3>USE WEATHER STATION ID (BEST WAY)</h3>
        <form>
          <input
            name='station'
            type='text'
            value={''}
            placeholder='Weather Station ID'
            onChange={''}
            className='form-input'
          />

          <button
            onClick={async event => {
              event.preventDefault();
              const weather = await this.handleGetWeatherWithStationID(event);
              console.log(weather);
              this.props.setWeatherInfo(weather);
            }}
            className='submit-button'
          >
            Get Weather
          </button>
        </form>
        <h3>City or Country to Lookup. Go ahead!</h3>
        <form>
          <input
            name='city'
            type='text'
            value={this.props.selectedCity}
            placeholder='City'
            onChange={this.handleCity}
            className='form-input'
          />

          <button onClick={this.hand} className='submit-button'>
            Get Weather
          </button>
        </form>
        <h3>Know the Latitude and Longitude? Try this.</h3>
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
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  targetCity: cityName => dispatch(targetCity(cityName)),
  getLatLong: latLong => dispatch(getLatLong(latLong)),
  setWeatherInfo: weatherInfo => dispatch(setWeatherInfo(weatherInfo))
});

export const mapStateToProps = state => ({
  selectedCity: state.selectedCity,
  latLong: state.latLong,
  stationIDs: state.stationIDs,
  weatherInfo: state.weatherInfo
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormInput);
