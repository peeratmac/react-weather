import React, { Component } from 'react';
import { connect } from 'react-redux';
import { targetCity, getLatLong } from '../../actions';
import { fetchLatLong } from '../../apiCalls';

class FormInput extends Component {
  handleCity = event => {
    this.props.targetCity(event.target.value);
  };

  handleLatLong = event => {
    this.props.getLatLong(event.target.value);
  };

  render() {
    return (
      <section className='form'>
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

          <button onClick={this.handleGetWeather} className='submit-button'>
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
  getLatLong: latLong => dispatch(getLatLong(latLong))
});

export const mapStateToProps = state => ({
  selectedCity: state.selectedCity,
  latLong: state.latLong
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormInput);
