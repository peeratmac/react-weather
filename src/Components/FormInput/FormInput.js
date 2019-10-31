import React, { Component } from 'react';

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
          name='latitude'
          type='text'
          value={''}
          placeholder='Latitude'
          onChange={() => {}}
          className='form-input'
        />

        <input
          name='longitude'
          type='text'
          value={''}
          placeholder='Longitude'
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

export default FormInput;
