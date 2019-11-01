import React, { Component } from 'react';
import { connect } from 'react-redux';
import { targetCity } from '../../actions';

class FormInput extends Component {
  handleGetWeather = event => {
    event.preventDefault();
    console.log('handleGetWeather Button Click!');
  };

  render() {
    return (
      <section className='form'>
        <h3>City or Country to Lookup. Go ahead!</h3>
        <form>
          <input
            name='city'
            type='text'
            value={''}
            placeholder='City'
            onChange={() => {}}
            className='form-input'
          />

          <input
            name='country'
            type='text'
            value={''}
            placeholder='Country'
            onChange={() => {}}
            className='form-input'
          />

          <button onClick={this.handleGetWeather} className='submit-button'>
            Get Weather
          </button>
        </form>
        <h3>Know the Latitude and Longitude? Try this.</h3>
        <input
          name='lat-long'
          type='text'
          value={''}
          placeholder='Latitude and Longitude'
          onChange={() => {}}
          className='form-input'
        />

        <button onClick={this.handleGetWeather} className='submit-button'>
          Get Weather
        </button>
        <form></form>
      </section>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  targetCity: cityName => dispatch(targetCity(cityName))
});

export const mapStateToProps = state => ({
  targetCity: state.targetCity
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormInput);
